import { Router } from "express";
import { testDB } from "../libs/testDB.js";

const router = Router();

router.get("/createTrip", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    trips(customer_id, description, state)
    VALUES ($1, $2, $3) RETURNING *;`,
    [1, "Viajes DB", "not started"],
    "create trip"
  );
});

router.get("/getAllTrips", async (req, res, next) => {
  await testDB(res, next, `SELECT * FROM trips;`, [], "get all trip");
});

router.get("/getTripById", async (req, res, next) => {
  await testDB(
    res,
    next,
    `SELECT * FROM trips WHERE trip_id = $1;`,
    [5],
    "get all trip"
  );
});

router.get("/updateTrip", async (req, res, next) => {
  await testDB(
    res,
    next,
    `UPDATE trips SET description = $1 WHERE trip_id = $2 RETURNING *`,
    ["New description", 5],
    "update trip"
  );
});

router.get("/deleteTrip", async (req, res, next) => {
  await testDB(
    res,
    next,
    `DELETE FROM trips WHERE trip_id = $1 RETURNING *`,
    [5],
    "delete trip"
  );
});

router.get("/createWithNoUserId", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    trips(description, state)
    VALUES ($1, $2) RETURNING *;`,
    ["Viajes DB", "not started"],
    "DB TABLE trips customer_id NOT NULL constraint have vulnerabilities"
  );
});

router.get("/descriptionMaxLength", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    trips(customer_id, description, state)
    VALUES ($1, $2, $3) RETURNING *;`,
    [
      1,
      "descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription",
      "not started",
    ],
    "DB TABLE trips description MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/stateEnumContraint", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    trips(customer_id, description, state)
    VALUES ($1, $2, $3) RETURNING *;`,
    [1, "viaje DB", "invalid trip_state_enum for state"],
    "DB TABLE trips state ENUM constraint have vulnerabilities"
  );
});

export default router;
