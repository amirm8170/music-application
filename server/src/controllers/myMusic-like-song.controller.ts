import { User } from "./../models/user.model";
import { Song } from "./../models/songs.model";
import { CustomError } from "./../middlewares/error.middleware";
import mongoose from "mongoose";
import { RequestHandler } from "express";
export const likedSongsController: RequestHandler = async (req, res, next) => {
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

    //check if he liked that songs before so now the song removed (dislike) from his likedSongs array.
    const isSong = await User.findOne({
      _id: userId,
      likedSongs: { $in: [songId] },
    });
    if (isSong) {
      const user = await User.findByIdAndUpdate(
        userId,
        {
          $pull: { likedSongs: songId },
        },
        { new: true }
      );
      return res.status(201).json(user);
    }

    //check if userId there is in db and if yes, then push song to user's collection and return updated user as response!
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $push: { likedSongs: songId },
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
