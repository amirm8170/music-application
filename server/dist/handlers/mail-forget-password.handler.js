"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.sendMailConfirmation = void 0;
const error_middleware_1 = require("./../middlewares/error.middleware");
const user_model_1 = require("./../models/user.model");
const nodemailer_1 = __importDefault(require("nodemailer"));
const crypto_1 = __importDefault(require("crypto"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const sendMailConfirmation = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //generate random code to reuse it in send mail for client and store it in db.
        const emailToken = crypto_1.default.randomInt(1000, 9999);
        const emailTokenTime = new Date();
        //store emailToken and emailTokenTime in db to confirm email for change password.
        const user = yield user_model_1.User.findOneAndUpdate({ email }, { $set: { emailToken, emailTokenTime } });
        if (!user) {
            throw new error_middleware_1.CustomError(400, "invalid email!");
        }
        const transporter = nodemailer_1.default.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_NODEMAILER,
                pass: process.env.PASSWORD_NODEMAILER,
            },
        });
        const mailOption = {
            from: "music-app",
            to: email,
            subject: "confirmation code",
            text: `your confirmation code is :${emailToken}`,
        };
        //send mail with nodemailer
        transporter.sendMail(mailOption, (err, res) => {
            if (err) {
                throw new error_middleware_1.CustomError(400, err.message);
            }
        });
        return emailToken;
    }
    catch (error) {
        console.log({ emailError: error });
    }
});
exports.sendMailConfirmation = sendMailConfirmation;
