import mongoose, { Schema, Document } from "mongoose";

const eventSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    time: { type: Date, required: true },
    address: { type: String, required: true },
    contact: { type: String, required: true },
    picUrl: { type: String, required: true },
  },
  { timestamps: true }
);

export const Event = mongoose.model<Document>("events", eventSchema);
