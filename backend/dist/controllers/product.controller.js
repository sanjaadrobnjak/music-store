"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const Product_1 = __importDefault(require("../models/Product"));
class ProductController {
    constructor() {
        this.getAllProducts = (req, res) => {
            Product_1.default.find()
                .then((products) => {
                res.status(200).json(products);
            })
                .catch((err) => {
                console.error("Error getting products: ", err);
                res.status(500).json({ message: "Error getting products!" });
            });
        };
    }
}
exports.ProductController = ProductController;
