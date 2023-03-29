import { storeEvents } from "./controllers/inset-events.controller";
import {
  storeSongs,
  storeVideos,
} from "./controllers/insert-songs&videos.controller";
import { app } from "./app";
import { createServer } from "http";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT || 2000,
  MONGO_URI: process.env.MONGO,
};

(async function () {
  mongoose.connect(config.MONGO_URI!);
  createServer(app).listen(config.PORT!);
  await storeSongs();
  await storeVideos();
  await storeEvents();
  console.log(`server is on ${config.PORT}`);
})();
