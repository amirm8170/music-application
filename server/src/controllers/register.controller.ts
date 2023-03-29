import mongoose from "mongoose";
import { generateRefreshToken } from "./../handlers/jwt.handler";
import { hashPassword } from "./../handlers/hash-password.handler";
import { CustomError } from "./../middlewares/error.middleware";
import { validateUser, User } from "./../models/user.model";
import { RequestHandler } from "express";

export const registerController: RequestHandler = async (req, res, next) => {
  //first of all check if user's information is valid.
  const { error } = validateUser(req.body);
  try {
    if (error) {
      throw new CustomError(400, error.message);
    }
    //hash password before save in db
    const hash: string = await hashPassword(req.body.password);
    const _id = new mongoose.Types.ObjectId();
    const refreshToken: string = generateRefreshToken(_id.toString());
    const newUser = new User({
      _id,
      fullName: req.body.fullName,
      email: req.body.email,
      password: hash,
      userName: req.body.userName,
      refreshToken,
    });
    //save data in db and return saved data as response.
    await newUser.save();

    return res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};
