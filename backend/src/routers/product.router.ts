import express = require('express');
import { ProductController } from '../controllers/product.controller';

const productRouter = express.Router();

productRouter
    .route("/getAllProducts")
    .get((req, res) => {
        console.log("Route products/getAllProducts is called!");
        new ProductController().getAllProducts(req, res)
    });


export default productRouter;