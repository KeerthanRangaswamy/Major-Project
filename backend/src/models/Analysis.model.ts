import mongoose from "mongoose";
import { AnalysisDocument, AnalysisModel } from "../types/Analysis";

const analysisSchema = new mongoose.Schema<AnalysisDocument, AnalysisModel>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    audioFile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AudioFile",
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female", "other"],
    },
    name: {
      type: String,
      required: false,
    },
    result: {
      type: String,
      default: "Default Result!",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    strict: "throw",
  },
);

const Analysis = mongoose.model<AnalysisDocument, AnalysisModel>(
  "Analysis",
  analysisSchema,
);
export default Analysis;
