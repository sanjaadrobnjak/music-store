"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
var Product_1 = require("../models/Product");
var ProductController = /** @class */ (function () {
    function ProductController() {
        this.getAllProducts = function (req, res) {
            Product_1.default.find()
                .then(function (products) {
                res.status(200).json(products);
            })
                .catch(function (err) {
                console.error("Error getting products: ", err);
                res.status(500).json({ message: "Error getting products!" });
            });
        };
    }
    return ProductController;
}());
exports.ProductController = ProductController;
