import { Router } from "express";
import { testDB } from "../libs/testDB.js";

const router = Router();

router.get("/updateUser/:id", async (req, res, next) => {
  const id = req.params.id;
  await testDB(
    res,
    next,
    `UPDATE users SET user_name = $1 WHERE user_id = $2;`,
    ["New name", id],
    "update user name"
  );
});

router.get("/updateCustomer/:id", async (req, res, next) => {
  const id = req.params.id;
  await testDB(
    res,
    next,
    `UPDATE customers SET first_name = $1 WHERE user_id = $2;`,
    ["New name", id],
    "update user"
  );
});

router.get("/updateTrip", async (req, res, next) => {
  await testDB(res, next, ``, [], "");
});

router.get("/updateHost", async (req, res, next) => {
  await testDB(res, next, ``, [], "");
});

router.get("/updateTransportation", async (req, res, next) => {
  await testDB(res, next, ``, [], "");
});

router.get("/updateActivity", async (req, res, next) => {
  await testDB(res, next, ``, [], "");
});
export default router;
