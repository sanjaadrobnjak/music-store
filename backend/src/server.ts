import express = require('express');
import cors = require("cors");
import mongoose from 'mongoose';
import productRouter from './routes/product.router';
import artistRouter from './routes/artist.router';


var app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/music_store");
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("db connection ok");
});

const router = express.Router();
router.use("/products", productRouter);
router.use("/artists", artistRouter);

app.use("/", router);

app.listen(4000, () => console.log(`Express server running on port 4000`));
