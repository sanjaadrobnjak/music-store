"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const artist_controller_1 = require("../controllers/artist.controller");
const artistRouter = express.Router();
artistRouter
    .route("/getAllArtists")
    .get((req, res) => {
    console.log("Route artists/getAllArtists is called!");
    new artist_controller_1.ArtistController().getAllArtists(req, res);
});
exports.default = artistRouter;
