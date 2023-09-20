import { Router } from "express";
import {
  getAllCustomers,
  getCustomer,
  createCustomer,
  deleteCustomer,
  updateCustomer,
} from "../controllers/customers.controller.js";

const router = Router();

router.get("/customers", getAllCustomers);
router.get("/customers/:id", getCustomer);
router.post("/customers", createCustomer);
router.delete("/customers/:id", deleteCustomer);
router.put("/customers/:id", updateCustomer);

export default router;
