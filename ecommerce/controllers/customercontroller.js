import Customer from "../models/customer.js";
const createcustomer = async (req, res) => {
    try {
        const{name,email,address,phonenumber} = req.body;
        const existcustomer = await Customer.findOne({email});
        if (!name || !email || !address || !phonenumber) {
            return res.status(400).json({ message: "All fields are required" });
        }
        if(existcustomer){
            return res.status(409).json({message: "customer already exist"});        
        }
        const newcustomer = new Customer({name,email,address,phonenumber});
        await newcustomer.save();
        res.status(201).json({newcustomer,message: "customer created successfully"});
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};
export default createcustomer