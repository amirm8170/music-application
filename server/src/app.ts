import { router } from "./routers/router";
import { errorHandler } from "./middlewares/error.middleware";
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import path from "path";

export const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(cookieParser());

app.use("/v1", router);

app.use(errorHandler);

app.use(express.static(path.join(__dirname, "..", "public")));
app.get("/*", (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
