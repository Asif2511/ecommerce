import express from "express";
import createcustomer from "../controllers/customercontroller.js"


const router = express.Router();

router.post("/createcustomer", createcustomer);


export default router;