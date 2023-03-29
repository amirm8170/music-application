import { Song } from "./../models/songs.model";
import { CustomError } from "./../middlewares/error.middleware";
import mongoose from "mongoose";
import { RequestHandler } from "express";

export const downloadCounterController: RequestHandler = async (req, res, next) => {
  try {
    const { songId } = req.params;

    //validate id before everything..
    const isValidSongId = mongoose.isValidObjectId(songId);
    if (!isValidSongId) {
      throw new CustomError(404, "invalid id!");
    }

    //increment downloads after each download.
    const song = await Song.findByIdAndUpdate(
      songId,
      {
        $inc: { downloads: 1 },
      },
      { new: true }
    );
    return res.status(201).json(song);
  } catch (error) {
    next(error);
  }
};
