import Customer from "../models/customer.js";
const getallcustomer = async (req, res) => {
    try {
        const allcustomer = await Customer.find({});
        res.status(200).json(allcustomer);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const getcustomerbyid = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        res.status(200).json(customer);
    } catch (error) {
        res.status(404).json({ message: error.message });
}

}

export { getallcustomer, getcustomerbyid }