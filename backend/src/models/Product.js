"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Schema = mongoose_1.default.Schema;
var Product = new Schema({
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
exports.default = mongoose_1.default.model("Product", Product, "products");
