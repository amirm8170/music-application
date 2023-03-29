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
exports.resetPasswordController = exports.sendMailtoForgetPassword = void 0;
const mail_forget_password_handler_1 = require("./../handlers/mail-forget-password.handler");
const hash_password_handler_1 = require("./../handlers/hash-password.handler");
const error_middleware_1 = require("./../middlewares/error.middleware");
const user_model_1 = require("./../models/user.model");
let mailToken;
const nowTime = new Date().getTime();
const twoMins = 2 * 60 * 1000;
const sendMailtoForgetPassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const user = yield user_model_1.User.findOne({ email });
        if (!user) {
            throw new error_middleware_1.CustomError(404, "user not found!");
        }
        mailToken = yield (0, mail_forget_password_handler_1.sendMailConfirmation)(email);
        return res.status(200).json({ message: "check your mailbox!" });
    }
    catch (error) {
        next(error);
    }
});
exports.sendMailtoForgetPassword = sendMailtoForgetPassword;
const resetPasswordController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token, password, id } = req.body;
        //check if token is in db or no!
        const user = yield user_model_1.User.findById(id);
        if (!user || !token) {
            throw new error_middleware_1.CustomError(404, "user not found!");
        }
        //check if tokenTime is expired or no and token is valid or no!
        const userEmailTokenTime = user.emailTokenTime.getTime();
        if (user.emailToken !== +token) {
            throw new error_middleware_1.CustomError(400, "invalid token!");
        }
        else if (nowTime - userEmailTokenTime > twoMins) {
            throw new error_middleware_1.CustomError(400, "token time expired. try again!");
        }
        else if (password.trim().length < 7 || !password) {
            throw new error_middleware_1.CustomError(400, "invalid new password type!");
        }
        //save new password in db
        const newPassword = yield (0, hash_password_handler_1.hashPassword)(password);
        const userWithNewPassword = yield user_model_1.User.findOneAndUpdate(id, { $set: { password: newPassword } }, { new: true });
        return res.status(201).json(userWithNewPassword);
    }
    catch (error) {
        next(error);
    }
});
exports.resetPasswordController = resetPasswordController;
