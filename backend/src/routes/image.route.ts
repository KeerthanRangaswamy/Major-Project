import express from "express";
import { getAudioFile } from "../controllers/audio.controller";
import { checkAuth } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/:fileId", checkAuth, getAudioFile);

export default router;
