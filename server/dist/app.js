"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const router_1 = require("./routers/router");
const error_middleware_1 = require("./middlewares/error.middleware");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const path_1 = __importDefault(require("path"));
exports.app = (0, express_1.default)();
exports.app.use((0, morgan_1.default)("combined"));
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use((0, helmet_1.default)());
exports.app.use((0, cookie_parser_1.default)());
exports.app.use("/v1", router_1.router);
exports.app.use(error_middleware_1.errorHandler);
exports.app.use(express_1.default.static(path_1.default.join(__dirname, "..", "public")));
exports.app.get("/*", (req, res) => {
    return res.sendFile(path_1.default.join(__dirname, "..", "public", "index.html"));
});
