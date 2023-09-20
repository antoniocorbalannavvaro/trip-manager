import { Router } from "express";
import {
  getAllActivities,
  getOneActivity,
  createActivity,
  deleteActivity,
  updateActivity,
} from "../controllers/activities.controller.js";

const router = Router();

router.get("/activities", getAllActivities);
router.get("/activities/:id", getOneActivity);
router.post("/activities", createActivity);
router.delete("/activities/:id", deleteActivity);
router.put("/activities/:id", updateActivity);

export default router;
