import express from "express";
import {
  deleteAnalysisHistory,
  getAnalysisHistory,
  getRecommendation,
} from "../controllers/analysis.controller";
import upload from "../config/multer";

const router = express.Router();

router.post("/recommend", upload.single("file"), getRecommendation);

router.get("/history", getAnalysisHistory);

router.delete("/history/:analysisId", deleteAnalysisHistory);

export default router;
