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
exports.addVideoToMyMusic = void 0;
const user_model_1 = require("./../models/user.model");
const videos_model_1 = require("./../models/videos.model");
const error_middleware_1 = require("./../middlewares/error.middleware");
const mongoose_1 = __importDefault(require("mongoose"));
const addVideoToMyMusic = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const { videoId } = req.body;
    try {
        //validate Ids before everything.
        const validUserId = mongoose_1.default.isValidObjectId(userId);
        const validVideoId = mongoose_1.default.isValidObjectId(videoId);
        if (!validVideoId || !validUserId) {
            throw new error_middleware_1.CustomError(404, "invalid id!");
        }
        //check if videoId there is in db.
        const video = yield videos_model_1.Video.findById(videoId);
        if (!video) {
            throw new error_middleware_1.CustomError(404, "invalid videoId!");
        }
        //check if that video not exist in his song's ..
        const isVideo = yield user_model_1.User.findOne({
            _id: userId,
            videos: { $in: [videoId] },
        });
        if (isVideo) {
            throw new error_middleware_1.CustomError(400, "you already have this video!");
        }
        //check if userId there is in db and if yes, then push video to user's collection and return updated user as response!
        const user = yield user_model_1.User.findByIdAndUpdate(userId, {
            $push: { videos: videoId },
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
exports.addVideoToMyMusic = addVideoToMyMusic;
