"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadMusicController = void 0;
const error_middleware_1 = require("./../middlewares/error.middleware");
const mongoose_1 = __importDefault(require("mongoose"));
const songs_model_1 = require("./../models/songs.model");
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
const downloadMusicController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //get id from params and check if is valid or no.
        const { id } = req.params;
        const isId = mongoose_1.default.isValidObjectId(id);
        if (!isId) {
            throw new error_middleware_1.CustomError(404, "not found!");
        }
        const song = yield songs_model_1.Song.findById(id);
        const { songName, songUrl } = song;
        // create writeStream to download song in directory.
        const file = fs_1.default.createWriteStream(songName);
        const request = https_1.default.get(songUrl, (response) => {
            response.pipe(file);
            file.on("finish", () => {
                file.close();
                console.log("completed!");
            });
        });
        //TODO: stream song here chunk by chunk
    }
    catch (error) {
        next(error);
    }
});
exports.downloadMusicController = downloadMusicController;
