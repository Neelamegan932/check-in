import User from "../model/signup.js";
const date = new Date();

export const signUp = async (req, res) => {
  const newUser = new User({
    userName: req.body.userName,
    password: req.body.password,
    confirm_password: req.body.confirm_password,
    email_id: req.body.email_id,
    status: "checked out",
  });
  try {
    if (newUser.password != newUser.confirm_password) {
      return res.json({
        Error: "Password and confirm password fields are mismatched",
      });
    }
    const user = await newUser.save(); //save() method used to save our data in a database
    const message = "Account created successfully";
    return res.status(201).json({ user, message }); // 201 is a success status code while creating new record
  } catch (error) {
    return res.status(400).json({ message: error.message }); //400 is a bad request code
  }
};

export const signIn = async (req, res) => {
  let result = "User logged in successfully";
  const existingUser = await User.findOne({
    email_id: req.body.email_id,
    password: req.body.password,
  });
  if (existingUser) {
    existingUser.status = "checked in";
    await existingUser.save();
    return res.status(201).json({ existingUser, result });
  } else {
    let message =
      "User not found, please enter the correct user name and password";
    return res.status(404).json({ message: message });
  }
};

export const getStatus = async (req, res) => {
  const userStatus = await User.findById(req.params.id);
  if (!userStatus) {
    return res.json({
      message: "User not found, please enter valid id",
    });
  } else if (userStatus.status) {
    return res.json({
      userName: userStatus.userName,
      status: userStatus.status,
    });
  } else {
    userStatus.status = "checked out";
    await userStatus.save();
    return res.json({
      userName: userStatus.userName,
      status: userStatus.status,
    });
  }
};
