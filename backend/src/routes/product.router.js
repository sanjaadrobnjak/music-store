"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var product_controller_1 = require("../controllers/product.controller");
var productRouter = express.Router();
productRouter
    .route("/getAllProducts")
    .get(function (req, res) { return new product_controller_1.ProductController().getAllProducts(req, res); });
exports.default = productRouter;
