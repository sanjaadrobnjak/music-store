"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Album = new Schema({
    album_id: {
        type: Number,
    },
    title: {
        type: String,
    },
    release_date: {
        type: String,
    },
    genre: {
        type: String,
    },
});
let Artist = new Schema({
    artist_id: {
        type: Number,
    },
    name: {
        type: String,
    },
    bio: {
        type: String,
    },
    albums: [Album],
    image_url: {
        type: String,
    },
});
exports.default = mongoose_1.default.model("Artist", Artist, "artists");
