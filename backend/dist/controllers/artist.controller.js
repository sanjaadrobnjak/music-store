"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistController = void 0;
const Artist_1 = __importDefault(require("../models/Artist"));
class ArtistController {
    constructor() {
        this.getAllArtists = (req, res) => {
            Artist_1.default.find()
                .then((artists) => {
                res.status(200).json(artists);
            })
                .catch((err) => {
                console.error("Error getting artists: ", err);
                res.status(500).json({ message: "Error getting artists!" });
            });
        };
    }
}
exports.ArtistController = ArtistController;
