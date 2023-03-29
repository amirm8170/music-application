import mongoose from "mongoose";
import { User } from "./../models/user.model";
import { CustomError } from "./../middlewares/error.middleware";
import { RequestHandler } from "express";
export const getLikedSongsController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { userId } = req.params;
    //check if userId is valid.
    const user = await User.findById(userId);
    if (!user) {
      throw new CustomError(404, "user not found!");
    }
    const userSongs = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "songs",
          localField: "likedSongs",
          foreignField: "_id",
          as: "userSongs",
        },
      },
    ]);
    return res.status(200).json(userSongs);
  } catch (error) {
    next(error);
  }
};
