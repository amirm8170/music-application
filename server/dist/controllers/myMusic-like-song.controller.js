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
exports.likedSongsController = void 0;
const user_model_1 = require("./../models/user.model");
const songs_model_1 = require("./../models/songs.model");
const error_middleware_1 = require("./../middlewares/error.middleware");
const mongoose_1 = __importDefault(require("mongoose"));
const likedSongsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const { songId } = req.body;
    try {
        //validate Ids before everything.
        const validUserId = mongoose_1.default.isValidObjectId(userId);
        const validSongId = mongoose_1.default.isValidObjectId(songId);
        if (!validSongId || !validUserId) {
            throw new error_middleware_1.CustomError(404, "invalid id!");
        }
        //check if songId there is in db.
        const song = yield songs_model_1.Song.findById(songId);
        if (!song) {
            throw new error_middleware_1.CustomError(404, "invalid songId!");
        }
        //check if he liked that songs before so now the song removed (dislike) from his likedSongs array.
        const isSong = yield user_model_1.User.findOne({
            _id: userId,
            likedSongs: { $in: [songId] },
        });
        if (isSong) {
            const user = yield user_model_1.User.findByIdAndUpdate(userId, {
                $pull: { likedSongs: songId },
            }, { new: true });
            return res.status(201).json(user);
        }
        //check if userId there is in db and if yes, then push song to user's collection and return updated user as response!
        const user = yield user_model_1.User.findByIdAndUpdate(userId, {
            $push: { likedSongs: songId },
        }, { new: true });
        if (!user) {
            throw new error_middleware_1.CustomError(404, "invalid userId!");
        }
        return res.status(201).json(user);
    }
    catch (error) {
        next(error);
    }
});
exports.likedSongsController = likedSongsController;
