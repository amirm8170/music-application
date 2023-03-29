import { CustomError } from "./../middlewares/error.middleware";
import { User } from "./../models/user.model";
import nodemailer from "nodemailer";
import crypto from "crypto";
import * as dotenv from "dotenv";
dotenv.config();
export const sendMailConfirmation = async (email: string) => {
  try {
    //generate random code to reuse it in send mail for client and store it in db.
    const emailToken = crypto.randomInt(1000, 9999);
    const emailTokenTime = new Date();

    //store emailToken and emailTokenTime in db to confirm email for change password.
    const user = await User.findOneAndUpdate(
      { email },
      { $set: { emailToken, emailTokenTime } }
    );

    if (!user) {
      throw new CustomError(400, "invalid email!");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_NODEMAILER,
        pass: process.env.PASSWORD_NODEMAILER,
      },
    });
    const mailOption = {
      from: "music-app",
      to: email,
      subject: "confirmation code",
      text: `your confirmation code is :${emailToken}`,
    };

    //send mail with nodemailer
    transporter.sendMail(mailOption, (err, res) => {
      if (err) {
        throw new CustomError(400, err.message);
      }
    });
    return emailToken;
  } catch (error) {
    console.log({ emailError: error });
  }
};
