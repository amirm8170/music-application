import { User } from './../models/user.model';
import { Video } from './../models/videos.model';
import { CustomError } from './../middlewares/error.middleware';
import  mongoose  from 'mongoose';
import { RequestHandler } from 'express';

export const addVideoToMyMusic: RequestHandler = async (req, res, next) => {
    const { userId } = req.params;
    const { videoId } = req.body;
    try {
      //validate Ids before everything.
      const validUserId = mongoose.isValidObjectId(userId);
      const validVideoId = mongoose.isValidObjectId(videoId);
      if (!validVideoId || !validUserId) {
        throw new CustomError(404, "invalid id!");
      }
      //check if videoId there is in db.
      const video = await Video.findById(videoId);
      if (!video) {
        throw new CustomError(404, "invalid videoId!");
      }
      //check if that video not exist in his song's ..
      const isVideo = await User.findOne({
        _id: userId,
        videos: { $in: [videoId] },
      });
      if (isVideo) {
        throw new CustomError(400, "you already have this video!");
      }
  
      //check if userId there is in db and if yes, then push video to user's collection and return updated user as response!
      const user = await User.findByIdAndUpdate(
        userId,
        {
          $push: { videos: videoId },
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