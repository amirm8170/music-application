import { Event } from "./../models/events.model";
import { RequestHandler } from "express";
export const getEventsController: RequestHandler = async (req, res, next) => {
  try {
    const events = await Event.find();
    return res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};
