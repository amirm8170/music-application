import { getEventsController } from './../controllers/get-events.controller';
import { getTrendSongsController } from "./../controllers/trend-songs.controller";
import { downloadCounterController } from "./../controllers/download-counter.controller";
import { getUserEventsController } from "./../controllers/myMusic-get-events.controller";
import { addEventsToMyMusic } from "./../controllers/myMusic-add-events.controller";
import { getUserVideosController } from "./../controllers/myMusic-get-videoSong.controller";
import { getUserSongsController } from "./../controllers/myMusic-get-userSong.controller";
import { addVideoToMyMusic } from "./../controllers/myMusic-add-videos.controller";
import { authMiddleware } from "./../middlewares/auth.middleware";
import { addSongToMyMusic } from "./../controllers/myMusic-add-songs.controller";
import { playVideoController } from "./../controllers/play-video.controller";
import { playSongController } from "./../controllers/play-music.controller";
import { getVideosController } from "./../controllers/get-videos.controller";
import { getSongsController } from "./../controllers/get-songs.controller";
import {
  sendMailtoForgetPassword,
  resetPasswordController,
} from "./../controllers/forget-password.controller";
import { loginController } from "./../controllers/login.controller";
import { registerController } from "./../controllers/register.controller";
import { Router } from "express";
import { likedSongsController } from "../controllers/myMusic-like-song.controller";
import { getLikedSongsController } from "../controllers/myMusic-get-likedSongs.controller";

export const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/forget-password-sendMail", sendMailtoForgetPassword);
router.post("/reset-password", resetPasswordController);
router.get("/songs", getSongsController);
router.get("/videos", getVideosController);
router.get("/events" , getEventsController)
router.get("/play-song/:id", playSongController);
router.get("/play-video/:id", playVideoController);
router.put("/add-song/:userId", authMiddleware, addSongToMyMusic);
router.put("/add-video/:userId", authMiddleware, addVideoToMyMusic);
router.put("/add-event/:userId", authMiddleware, addEventsToMyMusic);
router.put("/liked-songs/:userId", authMiddleware, likedSongsController);
router.get("/user-songs/:userId", authMiddleware, getUserSongsController);
router.get("/user-likedSongs/:userId", authMiddleware, getLikedSongsController);
router.get("/user-videos/:userId", authMiddleware, getUserVideosController);
router.get("/user-events/:userId", authMiddleware, getUserEventsController);
router.put("/song-download/:songId", downloadCounterController);
router.get("/trend-songs", getTrendSongsController);
