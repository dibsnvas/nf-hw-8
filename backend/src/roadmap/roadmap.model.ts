import e from "express";
import mongoose, { Schema } from "mongoose";

const roadmapSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Roadmap = mongoose.model("Roadmap", roadmapSchema);
export default Roadmap;