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
exports.authMiddleware = void 0;
const user_model_1 = require("./../models/user.model");
const jwt_handler_1 = require("./../handlers/jwt.handler");
const error_middleware_1 = require("./error.middleware");
const authMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    try {
        if (!authorization) {
            throw new error_middleware_1.CustomError(401, "not accessible!");
        }
        const token = authorization.split(" ")[1];
        const payloadId = (0, jwt_handler_1.verifyAccessToken)(token);
        if (!payloadId) {
            throw new error_middleware_1.CustomError(401, "not accessible!");
        }
        const user = yield user_model_1.User.findById(payloadId);
        if (!user) {
            throw new error_middleware_1.CustomError(401, "not accessible!");
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.authMiddleware = authMiddleware;
