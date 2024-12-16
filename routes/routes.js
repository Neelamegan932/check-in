import express from "express";
import { getStatus, signIn, signUp } from "../controllers/controller.js";
const router = express.Router();
router.post("/signup", signUp);

router.post("/signin", signIn);

router.get("/:id", getStatus);

export default router;
