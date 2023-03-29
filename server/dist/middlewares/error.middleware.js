"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.CustomError = void 0;
class CustomError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.CustomError = CustomError;
const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "something went wrong!";
    return res
        .status(statusCode)
        .json({ err: { statusCode, message: errorMessage } });
};
exports.errorHandler = errorHandler;
