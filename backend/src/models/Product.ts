import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Product = new Schema({
    id: {
        type: Number,
    },
    name: {
        type: String,
    },
    category: {
        type: String,
    },
    price: {
        type: Number,
    },
    stock: {
        type: Number,
    },
    description: {
        type: String,
    },
    manufacturer: {
        type: String,
    },
    rating: {
        type: Number,
    },
    image_url: {
        type: String,
    },
});
export default mongoose.model("Product", Product, "products");
