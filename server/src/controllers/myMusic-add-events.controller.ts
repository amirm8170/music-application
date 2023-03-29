import mongoose from "mongoose";
import { CustomError } from "../middlewares/error.middleware";
import { User } from "../models/user.model";
import { RequestHandler } from "express";

export const addEventsToMyMusic: RequestHandler = async (req, res, next) => {
  const { userId } = req.params;
  const { eventId } = req.body;
  try {
    //check if id is valid.
    const isValidId = mongoose.isValidObjectId(userId);
    const isValidEvent = mongoose.isValidObjectId(eventId);
    if (!isValidId || !isValidEvent) {
      throw new CustomError(400, "invalid id!");
    }

    //check if the user has this event or no!
    const isEvent = await User.findOne({
      _id: userId,
      events: { $in: [eventId] },
    });
    if (isEvent) {
      throw new CustomError(400, "you already have this event!");
    }

    //check if userId is valid and store new event for the user in db..
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $push: { events: eventId },
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
