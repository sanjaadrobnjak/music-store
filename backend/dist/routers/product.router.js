"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const product_controller_1 = require("../controllers/product.controller");
const productRouter = express.Router();
productRouter
    .route("/getAllProducts")
    .get((req, res) => {
    console.log("Route products/getAllProducts is called!");
    new product_controller_1.ProductController().getAllProducts(req, res);
});
exports.default = productRouter;
