import Order from "../models/oders.js"; 

const createOrder = async (req, res) => {
  try {
    const { customer, products } = req.body;

    
    const existingOrder = await Order.findOne({ customer });
    if (existingOrder) {
      return res.status(409).json({ message: "Order for this customer already exists" });
    }

    
    const totalAmount = products.reduce((sum, product) => {
      if (!product.price || !product.quantity) {
        throw new Error("Each product must have a price and quantity.");
      }
      return sum + product.price * product.quantity;
    }, 0);

    
    const newOrder = new Order({ customer, products, totalAmount });
    await newOrder.save();

    res.status(201).json({ order: newOrder, message: "Order created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message }); 
  }
};

export default createOrder;
