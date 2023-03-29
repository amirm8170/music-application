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
exports.loginController = void 0;
const jwt_handler_1 = require("./../handlers/jwt.handler");
const hash_password_handler_1 = require("./../handlers/hash-password.handler");
const error_middleware_1 = require("./../middlewares/error.middleware");
const user_model_1 = require("./../models/user.model");
const loginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, password } = req.body;
        const user = yield user_model_1.User.findOne({ fullName });
        // return invalid username or password because of the attackers can't know that this username is valid in db or not!
        if (!user) {
            throw new error_middleware_1.CustomError(401, "invalid username or password!");
        }
        // compare password with password that saved in db.
        const isValidPassword = yield (0, hash_password_handler_1.confirmPassword)(password, user.password);
        if (!isValidPassword) {
            throw new error_middleware_1.CustomError(401, "invalid username or password!");
        }
        //generate refreshToken and accessToken.
        const accessToken = (0, jwt_handler_1.generateAccessToken)(user.id);
        res.cookie("token", accessToken, {
            httpOnly: true,
            maxAge: 24 * 3600 * 1000,
        });
        //return id, refreshToken and accessToken as response.
        return res
            .status(200)
            .json({ accessToken, refreshToken: user.refreshToken, id: user.id });
    }
    catch (error) {
        next(error);
    }
});
exports.loginController = loginController;
