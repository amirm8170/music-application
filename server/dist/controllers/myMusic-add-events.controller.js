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
exports.addEventsToMyMusic = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const error_middleware_1 = require("../middlewares/error.middleware");
const user_model_1 = require("../models/user.model");
const addEventsToMyMusic = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const { eventId } = req.body;
    try {
        //check if id is valid.
        const isValidId = mongoose_1.default.isValidObjectId(userId);
        const isValidEvent = mongoose_1.default.isValidObjectId(eventId);
        if (!isValidId || !isValidEvent) {
            throw new error_middleware_1.CustomError(400, "invalid id!");
        }
        //check if the user has this event or no!
        const isEvent = yield user_model_1.User.findOne({
            _id: userId,
            events: { $in: [eventId] },
        });
        if (isEvent) {
            throw new error_middleware_1.CustomError(400, "you already have this event!");
        }
        //check if userId is valid and store new event for the user in db..
        const user = yield user_model_1.User.findByIdAndUpdate(userId, {
            $push: { events: eventId },
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
exports.addEventsToMyMusic = addEventsToMyMusic;
