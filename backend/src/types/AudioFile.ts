import mongoose from "mongoose";

export interface AudioFileBase {
  originalFileName: string;
  fileId: string;
  filename: string;
  userId: mongoose.Schema.Types.ObjectId;
  audioEndPoint: string;
  createdAt: Date;
}

// For instance methods
export interface AudioFileDocument extends mongoose.Document, AudioFileBase {}

// For static methods
export interface AudioFileModel extends mongoose.Model<AudioFileDocument> {}
