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
exports.checkLogin = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const error_middleware_1 = require("./../middlewares/error.middleware");
const user_model_1 = require("./../models/user.model");
const checkLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //for check that is user is login or no its better to use cookie and check user's information from that. this is just sample!
        const { id } = req.params;
        const isValidId = mongoose_1.default.isValidObjectId(id);
        if (!isValidId) {
            throw new error_middleware_1.CustomError(404, "invalid id!");
        }
        const isUser = yield user_model_1.User.findById(id);
        if (isUser) {
            return res.status(200).json(isUser);
        }
        else {
            throw new error_middleware_1.CustomError(404, "user not found!");
        }
    }
    catch (error) {
        next(error);
    }
});
exports.checkLogin = checkLogin;
