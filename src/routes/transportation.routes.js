import { Router } from "express";
import {
  getAllTransportations,
  getOneTransport,
  createTransport,
  deleteTransport,
  updateTransport,
} from "../controllers/transportation.controller.js";

const router = Router();

router.get("/transportation", getAllTransportations);
router.get("/transportation/:id", getOneTransport);
router.post("/transportation", createTransport);
router.delete("/transportation/:id", deleteTransport);
router.put("/transportation/:id", updateTransport);

export default router;
