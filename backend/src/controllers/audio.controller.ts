import { NextFunction, Request, Response } from "express";
import { sendError } from "../utils/sendResponse";
import AudioFile from "../models/AudioFile.model";

export async function getAudioFile(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const fileId = req.params.fileId;
    const audioFile = await AudioFile.findOne({
      fileId,
      userId: req.userId,
    });

    if (!audioFile) {
      return sendError(
        res,
        "Cannot find the audio file you are looking for!",
        "Audio File Not Found",
        404,
      );
    }

    const filePath = `${process.cwd()}/src/uploads/${audioFile.filename}`;
    res.contentType("audio/mpeg");
    return res.sendFile(filePath, (err) => {
      if (!res.headersSent && err) {
        return sendError(res, "File not found", "Audio file not found!", 404);
      }
    });
  } catch (error) {
    return next(error);
  }
}
