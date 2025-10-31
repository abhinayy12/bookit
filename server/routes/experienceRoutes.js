import express from "express";
import { getExperiences, getExperience } from "../controllers/experienceController.js";
const router = express.Router();

router.get("/", getExperiences);
router.get("/:id", getExperience);

export default router;