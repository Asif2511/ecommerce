import mongoose from "mongoose";

const oderSchema = new mongoose.Schema({
    oderdate: {
        type: Date,
        default: Date.now
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    products:{
        type: Array,
        required: true
        
    },
    totalAmount:{
        type: Number,
        required: true
    },
})  
export default mongoose.model("Oder", oderSchema);