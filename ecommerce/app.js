import express from "express";
import mongoose from "mongoose";
import customerrouter from "./routes/customerroutes.js";
import oderrouter from "./routes/odersroutes.js";
import getcustomerouts from "./routes/getcustomerouts.js"
import getproductsroutes from "./routes/getproductsroutes.js"
import getoders from "./routes/getoders.js"
import cors from "cors";
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
mongoose
  .connect("mongodb://localhost:27017/Ecommerce", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB (Database: Ecommerce)"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/customer", customerrouter); 
app.use("/orders", oderrouter); 
app.use("/getcustomer", getcustomerouts);
app.use("/getproducts", getproductsroutes);
app.use("/getoders", getoders);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

