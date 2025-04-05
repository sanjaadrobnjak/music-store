import express = require('express');
import Product from '../models/Product';


export class ProductController{
    getAllProducts = (req: express.Request, res: express.Response) => {
        Product.find()
            .then((products)=>{
                res.status(200).json(products);
            })
            .catch((err) => {
                console.error("Error getting products: ", err);
                res.status(500).json({message: "Error getting products!"});
            });

    };
}