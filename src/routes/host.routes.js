import { Router } from "express";
import {
  getAllhostes,
  getOnehost,
  createHost,
  deleteHost,
  updateHost,
} from "../controllers/host.controller.js";

const router = Router();

router.get("/host", getAllhostes);
router.get("/host/:id", getOnehost);
router.post("/host", createHost);
router.delete("/host/:id", deleteHost);
router.put("/host/:id", updateHost);

export default router;
