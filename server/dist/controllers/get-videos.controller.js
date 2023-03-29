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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVideosController = void 0;
const videos_model_1 = require("./../models/videos.model");
//get videos and do pagination for send them as response.
const getVideosController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = 1, limit = 0, singer, type } = req.query;
        let videos;
        if (singer) {
            videos = yield videos_model_1.Video.find({ singer })
                .skip(+page * +limit)
                .limit(+limit);
        }
        else if (type) {
            videos = yield videos_model_1.Video.find({ type })
                .skip(+page * +limit)
                .limit(+limit);
        }
        else if (singer && type) {
            videos = yield videos_model_1.Video.find({ singer, type })
                .skip(+page * +limit)
                .limit(+limit);
        }
        else {
            videos = yield videos_model_1.Video.find()
                .skip(+page * +limit)
                .limit(+limit);
        }
        return res.status(200).json(videos);
    }
    catch (error) {
        next(error);
    }
});
exports.getVideosController = getVideosController;
