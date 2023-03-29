import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import eventsSlice from "./eventsSlice";
import myMusicSlice from "./myMusicSlice";
import videosSlice from "./videosSlice";

export default combineReducers({
  auth: authSlice,
  music: myMusicSlice,
  events: eventsSlice,
  videos: videosSlice,
});
