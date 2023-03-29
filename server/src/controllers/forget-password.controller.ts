import { sendMailConfirmation } from "./../handlers/mail-forget-password.handler";
import { hashPassword } from "./../handlers/hash-password.handler";
import { CustomError } from "./../middlewares/error.middleware";
import { User } from "./../models/user.model";
import { RequestHandler } from "express";

interface IUser {
  id: string;
  emailToken: number;
  emailTokenTime: Date;
  password: string;
}

let mailToken;
const nowTime = new Date().getTime();
const twoMins = 2 * 60 * 1000;
export const sendMailtoForgetPassword: RequestHandler = async (
  req,
  res,
  next
) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new CustomError(404, "user not found!");
    }
    mailToken = await sendMailConfirmation(email);
    return res.status(200).json({ message: "check your mailbox!" });
  } catch (error) {
    next(error);
  }
};

export const resetPasswordController: RequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { token, password, id } = req.body;

    //check if token is in db or no!
    const user: IUser | null = await User.findById(id);
    if (!user || !token) {
      throw new CustomError(404, "user not found!");
    }

    //check if tokenTime is expired or no and token is valid or no!
    const userEmailTokenTime = user.emailTokenTime.getTime();
    if (user.emailToken !== +token) {
      throw new CustomError(400, "invalid token!");
    } else if (nowTime - userEmailTokenTime > twoMins) {
      throw new CustomError(400, "token time expired. try again!");
    } else if (password.trim().length < 7 || !password) {
      throw new CustomError(400, "invalid new password type!");
    }
    //save new password in db
    const newPassword = await hashPassword(password);
    const userWithNewPassword = await User.findOneAndUpdate(
      id,
      { $set: { password: newPassword } },
      { new: true }
    );
    return res.status(201).json(userWithNewPassword);
  } catch (error) {
    next(error);
  }
};
