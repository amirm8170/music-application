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
exports.downloadCounterController = void 0;
const songs_model_1 = require("./../models/songs.model");
const error_middleware_1 = require("./../middlewares/error.middleware");
const mongoose_1 = __importDefault(require("mongoose"));
const downloadCounterController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { songId } = req.params;
        //validate id before everything..
        const isValidSongId = mongoose_1.default.isValidObjectId(songId);
        if (!isValidSongId) {
            throw new error_middleware_1.CustomError(404, "invalid id!");
        }
        //increment downloads after each download.
        const song = yield songs_model_1.Song.findByIdAndUpdate(songId, {
            $inc: { downloads: 1 },
        }, { new: true });
        return res.status(201).json(song);
    }
    catch (error) {
        next(error);
    }
});
exports.downloadCounterController = downloadCounterController;
