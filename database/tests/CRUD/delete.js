import { Router } from "express";
import { testDB } from "../libs/testDB.js";

const router = Router();

router.get("/deleteUser", async (req, res, next) => {
  await testDB(
    res,
    next,
    `DELETE FROM users WHERE user_id = 1 RETURNING *;`,
    [],
    "USER DELETED"
  );
});

router.get("/deleteCustomer", async (req, res, next) => {
  await testDB(
    res,
    next,
    `DELETE FROM customers WHERE customer_id = 1 RETURNING *;`,
    [],
    "CUSTOMER DELETED"
  );
});

router.get("/deleteTrip", async (req, res, next) => {
  await testDB(
    res,
    next,
    `DELETE FROM trips WHERE trip_id = 1 RETURNING *;`,
    [],
    "TRIP DELETED"
  );
});

router.get("/deleteHost", async (req, res, next) => {
  await testDB(
    res,
    next,
    `DELETE FROM host WHERE host_id = 1 RETURNING *;`,
    [],
    "HOST DELETED"
  );
});

router.get("/deleteTransportation", async (req, res, next) => {
  await testDB(
    res,
    next,
    `DELETE FROM transportation WHERE transportation_id = 1 RETURNING *;`,
    [],
    "TRANSPORTATION DELETED"
  );
});

router.get("/deleteActivity", async (req, res, next) => {
  await testDB(
    res,
    next,
    `DELETE FROM activities WHERE activity_id = 1 RETURNING *;`,
    [],
    "ACTIVITY DELETED"
  );
});
export default router;
