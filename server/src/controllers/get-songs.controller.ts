import { Song } from "./../models/songs.model";
import { RequestHandler } from "express";

//get songs and do pagination for send them as response.
export const getSongsController: RequestHandler = async (req, res, next) => {
  try {
    
    const { page = 1, limit = 0, singer, type } = req.query;
    let songs;

    if (singer) {
      songs = await Song.find({ singer })
        .skip(+page * +limit)
        .limit(+limit);
    } else if (type) {
      songs = await Song.find({ type })
        .skip(+page * +limit)
        .limit(+limit);
    } else if (singer && type) {
      songs = await Song.find({ singer, type })
        .skip(+page * +limit)
        .limit(+limit);
    } else {
      songs = await Song.find()
        .skip(+page * +limit)
        .limit(+limit);
    }

    return res.status(200).json(songs);
  } catch (error) {
    next(error);
  }
};
