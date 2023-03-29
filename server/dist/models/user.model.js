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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.validateUser = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const userSchema = new mongoose_1.Schema({
    fullName: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    refreshToken: { type: String, required: true },
    emailToken: { type: Number },
    emailTokenTime: { type: Date },
    songs: [{ type: mongoose_1.default.Types.ObjectId }],
    videos: [{ type: mongoose_1.default.Types.ObjectId }],
    likedSongs: [{ type: mongoose_1.default.Types.ObjectId }],
    events: [{ type: mongoose_1.default.Types.ObjectId }],
}, { timestamps: true });
const validateUser = (userInfo) => {
    const schema = joi_1.default.object({
        fullName: joi_1.default.string().required().min(2).max(100),
        email: joi_1.default.string().required().email(),
        password: joi_1.default.string().required().min(6).max(150),
        userName: joi_1.default.string().required(),
    });
    return schema.validate(userInfo);
};
exports.validateUser = validateUser;
exports.User = mongoose_1.default.model("users", userSchema);
