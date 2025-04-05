import express = require('express');
import Artist from '../models/Artist';


export class ArtistController{
    getAllArtists = (req: express.Request, res: express.Response) => {
        Artist.find()
            .then((artists)=>{
                res.status(200).json(artists);
            })
            .catch((err) => {
                console.error("Error getting artists: ", err);
                res.status(500).json({message: "Error getting artists!"});
            });

    };
}