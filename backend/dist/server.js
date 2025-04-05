"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const mongoose_1 = __importDefault(require("mongoose"));
const product_router_1 = __importDefault(require("./routers/product.router"));
const artist_router_1 = __importDefault(require("./routers/artist.router"));
var app = express();
app.use(cors());
app.use(express.json());
mongoose_1.default.connect("mongodb://127.0.0.1:27017/music_store");
const connection = mongoose_1.default.connection;
connection.once("open", () => {
    console.log("db connection ok");
});
const router = express.Router();
router.use("/products", product_router_1.default);
router.use("/artists", artist_router_1.default);
app.use("/", router);
//app.use("/products", productRouter);
app.listen(4000, () => console.log(`Express server running on port 4000`));
