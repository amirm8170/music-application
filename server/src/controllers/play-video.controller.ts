import mongoose from "mongoose";
import { CustomError } from "./../middlewares/error.middleware";
import { Video } from "./../models/videos.model";
import { RequestHandler } from "express";

interface IVideo {
  videoUrl: string;
  picUrl: string;
}

export const playVideoController: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const isId = mongoose.isValidObjectId(id);
    if (!isId) {
      throw new CustomError(404, "not found!");
    }
    const video: IVideo | null = await Video.findById(id);
    if (!video) {
      throw new CustomError(404, "not found!");
    }
    return res.status(200).json({ link: video.videoUrl, picUrl: video.picUrl });
  } catch (error) {
    next(error);
  }
};
