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
exports.registerController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const jwt_handler_1 = require("./../handlers/jwt.handler");
const hash_password_handler_1 = require("./../handlers/hash-password.handler");
const error_middleware_1 = require("./../middlewares/error.middleware");
const user_model_1 = require("./../models/user.model");
const registerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //first of all check if user's information is valid.
    const { error } = (0, user_model_1.validateUser)(req.body);
    try {
        if (error) {
            throw new error_middleware_1.CustomError(400, error.message);
        }
        //hash password before save in db
        const hash = yield (0, hash_password_handler_1.hashPassword)(req.body.password);
        const _id = new mongoose_1.default.Types.ObjectId();
        const refreshToken = (0, jwt_handler_1.generateRefreshToken)(_id.toString());
        const newUser = new user_model_1.User({
            _id,
            fullName: req.body.fullName,
            email: req.body.email,
            password: hash,
            userName: req.body.userName,
            refreshToken,
        });
        //save data in db and return saved data as response.
        yield newUser.save();
        return res.status(201).json(newUser);
    }
    catch (error) {
        next(error);
    }
});
exports.registerController = registerController;
