import { Router } from "express";
import {
  getAllTrips,
  getTrip,
  createTrip,
  deleteTrip,
  updateTrip,
} from "../controllers/trips.controller.js";

const router = Router();

router.get("/trips", getAllTrips);
router.get("/trips/:id", getTrip);
router.post("/trips", createTrip);
router.delete("/trips/:id", deleteTrip);
router.put("/trips/:id", updateTrip);

export default router;
