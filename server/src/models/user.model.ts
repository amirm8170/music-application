import mongoose, { Schema, Document } from "mongoose";
import Joi, { number } from "joi";
const userSchema = new Schema(
  {
    fullName: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    refreshToken: { type: String, required: true },
    emailToken: { type: Number },
    emailTokenTime: { type: Date },
    songs: [{ type: mongoose.Types.ObjectId }],
    videos: [{ type: mongoose.Types.ObjectId }],
    likedSongs: [{ type: mongoose.Types.ObjectId }],
    events: [{ type: mongoose.Types.ObjectId }],
  },
  { timestamps: true }
);

export const validateUser = (userInfo: Document) => {
  const schema = Joi.object({
    fullName: Joi.string().required().min(2).max(100),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(150),
    userName: Joi.string().required(),
  });
  return schema.validate(userInfo);
};

export const User = mongoose.model<Document>("users", userSchema);
