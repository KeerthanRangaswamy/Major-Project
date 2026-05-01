import path from "node:path";
import mongoose from "mongoose";
import { AudioFileDocument, AudioFileModel } from "../types/AudioFile";

const audioFileSchema = new mongoose.Schema<AudioFileDocument, AudioFileModel>(
  {
    originalFileName: {
      type: String,
      required: true,
    },
    fileId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    virtuals: {
      audioEndPoint: {
        get(this: AudioFileDocument): string {
          return `/api/audio/${this.fileId}`;
        },
      },
      filename: {
        get(this: AudioFileDocument): string {
          const extension = path.extname(this.originalFileName);
          return `${this.fileId}${extension}`;
        },
      },
    },
  },
);

const AudioFile = mongoose.model("AudioFile", audioFileSchema);
export default AudioFile;
