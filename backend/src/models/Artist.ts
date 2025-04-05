import mongoose from "mongoose";
import { release } from "os";

const Schema = mongoose.Schema;

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
export default mongoose.model("Artist", Artist, "artists");
