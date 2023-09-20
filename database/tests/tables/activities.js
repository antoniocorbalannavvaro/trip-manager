import { Router } from "express";
import { testDB } from "../libs/testDB.js";

const router = Router();

router.get("/createActivity", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO activities(trip_id, activity_description) 
    VALUES ($1, $2) RETURNING *;`,
    [1, "activity from DB"],
    "create activity"
  );
});

router.get("/getAllActivities", async (req, res, next) => {
  await testDB(
    res,
    next,
    `SELECT * FROM activities;`,
    [],
    "get all activities"
  );
});

router.get("/getActivityById", async (req, res, next) => {
  await testDB(
    res,
    next,
    `SELECT * FROM activities WHERE activity_id = $1;`,
    [9],
    "get activity by id"
  );
});

router.get("/updateActivityById", async (req, res, next) => {
  await testDB(
    res,
    next,
    `UPDATE activities SET activity_description = $1 WHERE activity_id = $2 RETURNING *;`,
    ["new activity description", 9],
    "update activity by id"
  );
});

router.get("/deleteActivityById", async (req, res, next) => {
  await testDB(
    res,
    next,
    `DELETE FROM activities WHERE activity_id = $1 RETURNING *;`,
    [9],
    "update activity by id"
  );
});

router.get("/activityWithNoTripId", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO activities(trip_id, activity_description) 
    VALUES ($1, $2) RETURNING *;`,
    [null, "activity from DB"],
    "DB TABLE activities trip_id NOT NULL constraint have vulnerabilities"
  );
});

router.get("/descriptionMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO activities(trip_id, activity_description) 
    VALUES ($1, $2) RETURNING *;`,
    [
      1,
      "maxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenght",
    ],
    "DB TABLE activities activity_description MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/companyMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO activities(trip_id, activity_description, company) 
    VALUES ($1, $2, $3) RETURNING *;`,
    [
      1,
      "activity from DB",
      "maxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenght",
    ],
    "DB TABLE activities activity_description MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/locationMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO activities(trip_id, activity_description, activitiy_location) 
    VALUES ($1, $2, $3) RETURNING *;`,
    [
      1,
      "activity from DB",
      "maxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengt",
    ],
    "DB TABLE activities activitiy_location MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/additionalInfoMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO activities(trip_id, activity_description, additional_info) 
    VALUES ($1, $2, $3) RETURNING *;`,
    [
      1,
      "activity from DB",
      "maxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengtmaxlengt",
    ],
    "DB TABLE activities additional_info MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/priceMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO activities(trip_id, activity_description, price) 
    VALUES ($1, $2, $3) RETURNING *;`,
    [1, "activity from DB", 999999999999999],
    "DB TABLE activities price NUMERIC PRECISION constraint have vulnerabilities"
  );
});

router.get("/commissionMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO activities(trip_id, activity_description, commission) 
    VALUES ($1, $2, $3) RETURNING *;`,
    [1, "activity from DB", 99999999999999],
    "DB TABLE activities commission NUMERIC PRECISION constraint have vulnerabilities"
  );
});

router.get("/amountPayedMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO activities(trip_id, activity_description, amount_payed) 
    VALUES ($1, $2, $3) RETURNING *;`,
    [1, "activity from DB", 9999999999999],
    "DB TABLE activities amount_payed NUMERIC PRECISION constraint have vulnerabilities"
  );
});

router.get("/dateToType", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO activities(trip_id, activity_description, date_to) 
    VALUES ($1, $2, $3) RETURNING *;`,
    [1, "activity from DB", "not a date"],
    "DB TABLE activities date_to TYPE constraint have vulnerabilities"
  );
});

router.get("/dateFromType", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO activities(trip_id, activity_description, date_from) 
    VALUES ($1, $2, $3) RETURNING *;`,
    [1, "activity from DB", "not a date"],
    "DB TABLE activities date_from TYPE constraint have vulnerabilities"
  );
});

router.get("/updateNonExistsActivity", async (req, res, next) => {
  await testDB(
    res,
    next,
    `UPDATE activities SET activity_description = $1 WHERE activity_id = $2 RETURNING *;`,
    ["activity from DB", 0],
    "DB TABLE activities date_from TYPE constraint have vulnerabilities"
  );
});

export default router;
