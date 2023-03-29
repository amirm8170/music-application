import mongoose from "mongoose";
import { CustomError } from "./../middlewares/error.middleware";
import { User } from "./../models/user.model";
import { RequestHandler } from "express";
export const getUserEventsController: RequestHandler = async (req, res, next) => {
  try {
    const { userId } = req.params;
    //check if userId is valid.
    const user = await User.findById(userId);
    if (!user) {
      throw new CustomError(404, "user not found!");
    }
    const userEvents = await User.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "events",
          localField: "events",
          foreignField: "_id",
          as: "user-events",
        },
      },
    ]);
    return res.status(200).json(userEvents);
  } catch (error) {
    next(error);
  }
};
