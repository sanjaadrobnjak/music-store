import express = require('express');
import { ArtistController } from '../controllers/artist.controller';


const artistRouter = express.Router();

artistRouter
    .route("/getAllArtists")
    .get((req, res) => {
            console.log("Route artists/getAllArtists is called!");
            new ArtistController().getAllArtists(req, res)
        });
    
    
    export default artistRouter;