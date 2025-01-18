import express from "express";
import { getoders, getodersbycustomerid } from "../controllers/getoders.js"; // Use destructuring for clean imports

const router = express.Router();       

// Routes   
router.get("/", getoders); // Route to get all oders
router.get("/customer/:id", getodersbycustomerid); // Route to get oders by customer ID

export default router;