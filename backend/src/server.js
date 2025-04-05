"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var mongoose_1 = require("mongoose");
var product_router_1 = require("./routers/product.router");
var app = express();
app.use(cors());
app.use(express.json());
mongoose_1.default.connect("mongodb://127.0.0.1:27017/music_store");
var connection = mongoose_1.default.connection;
connection.once("open", function () {
    console.log("db connection ok");
});
var router = express.Router();
router.use("/products", product_router_1.default);
app.use("/", router);
app.listen(4000, function () { return console.log("Express server running on port 4000"); });
