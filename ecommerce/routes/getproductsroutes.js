import express from "express";
import { getprodcts, getproductbyid } from "../controllers/products.js"; // Use destructuring for clean imports

const router = express.Router();      

// Routes   
router.get("/", getprodcts); // Route to get all products
router.get("/:id", getproductbyid); // Route to get a specific product by ID

export default router;