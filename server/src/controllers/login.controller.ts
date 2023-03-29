import {
  generateAccessToken,
  generateRefreshToken,
} from "./../handlers/jwt.handler";
import { confirmPassword } from "./../handlers/hash-password.handler";
import { CustomError } from "./../middlewares/error.middleware";
import { User } from "./../models/user.model";
import { RequestHandler } from "express";

interface IUser {
  fullName: string;
  password: string;
  id: string;
  refreshToken: string;
}

export const loginController: RequestHandler = async (req, res, next) => {
  try {
    const { fullName, password } = req.body;
    const user: IUser | null = await User.findOne({ fullName });

    // return invalid username or password because of the attackers can't know that this username is valid in db or not!
    if (!user) {
      throw new CustomError(401, "invalid username or password!");
    }

    // compare password with password that saved in db.
    const isValidPassword = await confirmPassword(password, user.password);
    if (!isValidPassword) {
      throw new CustomError(401, "invalid username or password!");
    }

    //generate refreshToken and accessToken.
    const accessToken = generateAccessToken(user.id);

    res.cookie("token", accessToken, {
      httpOnly: true,
      maxAge: 24 * 3600 * 1000,
    });
    //return id, refreshToken and accessToken as response.
    return res
      .status(200)
      .json({ accessToken, refreshToken: user.refreshToken, id: user.id });
  } catch (error) {
    next(error);
  }
};
