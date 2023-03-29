import { Song } from "./../models/songs.model";
import { RequestHandler } from "express";

export const getTrendSongsController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    //sort songs by downloads..
    const songs = await Song.find().sort("-downloads");
    return res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
};
