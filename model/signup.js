import { model, Schema } from "mongoose";

//Writing the schema
//Schema is structure that defines tables, columns, and relation between tables in a database
//Here, we created a structure of a sample table with columns of title and description

const schema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  confirm_password: {
    type: String,
    required: true,
  },
  email_id: { type: String, required: true, unique: true },
  status: { type: String },
});

const User = model("userSignup", schema);

export default User;
