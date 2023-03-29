import mongoose, { Schema, Document } from "mongoose";

const songSchema = new Schema(
  {
    singer: { type: String, required: true },
    songUrl: { type: String, required: true, unique: true },
    picUrl: { type: String, required: true },
    songName: { type: String, required: true },
    type: { type: String, required: true },
    downloads: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Song = mongoose.model<Document>("songs", songSchema);
