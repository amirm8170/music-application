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
exports.getLikedSongsController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const user_model_1 = require("./../models/user.model");
const error_middleware_1 = require("./../middlewares/error.middleware");
const getLikedSongsController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        //check if userId is valid.
        const user = yield user_model_1.User.findById(userId);
        if (!user) {
            throw new error_middleware_1.CustomError(404, "user not found!");
        }
        const userSongs = yield user_model_1.User.aggregate([
            {
                $match: {
                    _id: new mongoose_1.default.Types.ObjectId(userId),
                },
            },
            {
                $lookup: {
                    from: "songs",
                    localField: "likedSongs",
                    foreignField: "_id",
                    as: "userSongs",
                },
            },
        ]);
        return res.status(200).json(userSongs);
    }
    catch (error) {
        next(error);
    }
});
exports.getLikedSongsController = getLikedSongsController;
