import express from "express";
import createOrder  from "../controllers/oderscontroller.js";

const router = express.Router();

router.post("/createorder", createOrder);

export default router;