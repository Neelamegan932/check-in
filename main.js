import express from "express";
import connectDB from "./lib/db.js";
import router from "./routes/routes.js";
const app = express();
const port = 8000;
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`);
});
