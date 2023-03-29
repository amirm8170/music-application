import { Song } from "./../models/songs.model";
import mongoose from "mongoose";
import { CustomError } from "./../middlewares/error.middleware";
import { User } from "./../models/user.model";
import { RequestHandler } from "express";

export const addSongToMyMusic: RequestHandler = async (req, res, next) => {
  const { userId } = req.params;
  const { songId } = req.body;
  try {
    //validate Ids before everything.
    const validUserId = mongoose.isValidObjectId(userId);
    const validSongId = mongoose.isValidObjectId(songId);
    if (!validSongId || !validUserId) {
      throw new CustomError(404, "invalid id!");
    }
    //check if songId there is in db.
    const song = await Song.findById(songId);
    if (!song) {
      throw new CustomError(404, "invalid songId!");
    }
    //check if that song not exist in his song's ..
    const isSong = await User.findOne({
      _id: userId,
      songs: { $in: [songId] },
    });
    if (isSong) {
      throw new CustomError(400, "you already have this song!");
    }

    //check if userId there is in db and if yes, then push song to user's collection and return updated user as response!
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $push: { songs: songId },
      },
      { new: true }
    );
    if (!user) {
      throw new CustomError(404, "invalid userId!");
    }
    return res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
