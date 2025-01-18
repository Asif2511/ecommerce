import express from "express";
import { getcustomerbyid, getallcustomer } from "../controllers/getcreatecustomer.js"; // Use destructuring for clean imports

const router = express.Router();

// Routes
router.get("/", getallcustomer); // Route to get all customers
router.get("/:id", getcustomerbyid); // Route to get a specific customer by ID

export default router;
