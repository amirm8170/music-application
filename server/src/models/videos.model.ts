import mongoose, { Schema, Document } from "mongoose";

const videoSchema = new Schema(
  {
    singer: { type: String, required: true },
    videoName: { type: String, required: true },
    videoUrl: { type: String, required: true, unique: true },
    picUrl: { type: String, required: true },
    downloads: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Video = mongoose.model<Document>("videos", videoSchema);
