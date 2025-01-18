import Oders from "../models/oders.js";
import Customer from "../models/customer.js";
const getoders = async (req, res) => {
    try {
        const oders = await Oders.find({});
        res.status(200).json(oders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const getodersbycustomerid = async (req, res) => {
    try {
        const oders = await Oders.find({ customer: req.params.id }).populate("customer");
        res.status(200).json(oders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export { getoders, getodersbycustomerid }