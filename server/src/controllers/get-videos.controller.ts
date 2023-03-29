import { RequestHandler } from "express";
import { Video } from "./../models/videos.model";

//get videos and do pagination for send them as response.

export const getVideosController: RequestHandler = async (req, res, next) => {
  try {
    const { page = 1, limit = 0, singer, type } = req.query;
    let videos;
    if (singer) {
      videos = await Video.find({ singer })
        .skip(+page * +limit)
        .limit(+limit);
    } else if (type) {
      videos = await Video.find({ type })
        .skip(+page * +limit)
        .limit(+limit);
    } else if (singer && type) {
      videos = await Video.find({ singer, type })
        .skip(+page * +limit)
        .limit(+limit);
    } else {
      videos = await Video.find()
        .skip(+page * +limit)
        .limit(+limit);
    }
    return res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};
