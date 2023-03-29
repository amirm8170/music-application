import mongoose from "mongoose";
import { CustomError } from "./../middlewares/error.middleware";
import { Song } from "./../models/songs.model";
import { RequestHandler } from "express";

interface ISong {
  songUrl: string;
  picUrl:string
}
export const playSongController: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const isId = mongoose.isValidObjectId(id);
    if (!isId) {
      throw new CustomError(404, "not found!");
    }
    const song: ISong | null = await Song.findById(id);
    if (!song) {
      throw new CustomError(404, "not found!");
    }
    return res.status(200).json({ link: song.songUrl , picUrl:song.picUrl });
  } catch (error) {
    next(error);
  }
};
