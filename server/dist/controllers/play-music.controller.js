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
exports.playSongController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const error_middleware_1 = require("./../middlewares/error.middleware");
const songs_model_1 = require("./../models/songs.model");
const playSongController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const isId = mongoose_1.default.isValidObjectId(id);
        if (!isId) {
            throw new error_middleware_1.CustomError(404, "not found!");
        }
        const song = yield songs_model_1.Song.findById(id);
        if (!song) {
            throw new error_middleware_1.CustomError(404, "not found!");
        }
        return res.status(200).json({ link: song.songUrl, picUrl: song.picUrl });
    }
    catch (error) {
        next(error);
    }
});
exports.playSongController = playSongController;
