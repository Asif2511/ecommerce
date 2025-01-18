import Products from "../models/products.js";
const getprodcts = async (req, res) => {
    try {
        const products = await Products.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
const getproductbyid = async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export { getprodcts, getproductbyid }