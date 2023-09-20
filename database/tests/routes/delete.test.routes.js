import { Router } from "express";
import { test } from "../libs/test.js";

const router = Router();

router.get("/deleteUser", async (req, res, next) => {
  await test(
    res,
    next,
    `DELETE FROM users WHERE user_id = 1;`,
    [],
    "USER DELETED"
  );
});

router.get("/deleteCustomer", async (req, res, next) => {
  await test(
    res,
    next,
    `DELETE FROM customers WHERE customer_id = 1;`,
    [],
    "CUSTOMER DELETED"
  );
});

router.get("/deleteTrip", async (req, res, next) => {
  await test(
    res,
    next,
    `DELETE FROM trips WHERE trip_id = 1;`,
    [],
    "TRIP DELETED"
  );
});

router.get("/deleteHost", async (req, res, next) => {
  await test(
    res,
    next,
    `DELETE FROM host WHERE host_id = 1;`,
    [],
    "HOST DELETED"
  );
});

router.get("/deleteTransportation", async (req, res, next) => {
  await test(
    res,
    next,
    `DELETE FROM transportation WHERE transportation_id = 1;`,
    [],
    "TRANSPORTATION DELETED"
  );
});

router.get("/deleteActivity", async (req, res, next) => {
  await test(
    res,
    next,
    `DELETE FROM activities WHERE activity_id = 1;`,
    [],
    "ACTIVITY DELETED"
  );
});
export default router;
