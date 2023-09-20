import { Router } from "express";
import { testDB } from "../libs/testDB.js";

const router = Router();

router.get("/createTransportation", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO transportation(trip_id, transportation_type, company, date_from, date_to, location_from, location_to, seat, price, commission, additional_info, receipt, amount_payed ) 
    VALUES ($1 ,$2 ,$3 ,$4 ,$5 ,$6 ,$7 ,$8 ,$9 ,$10 ,$11 ,$12, $13) RETURNING *`,
    [
      3,
      "metro",
      "DB",
      "2023-01-01 10:00",
      "2023-01-01 10:01",
      "Alberca",
      "Ontario",
      "1-A",
      1000.5,
      2,
      "info 1",
      "",
      1000,
    ],
    "create transportation"
  );
});

router.get("/getAllTransportation", async (req, res, next) => {
  await testDB(
    res,
    next,
    `SELECT * FROM transportation;`,
    [],
    "get all transportation"
  );
});

router.get("/getTransportationById", async (req, res, next) => {
  await testDB(
    res,
    next,
    `SELECT * FROM transportation WHERE transportation_id = $1;`,
    [9],
    "get transportation by id"
  );
});

router.get("/updateTransportationById", async (req, res, next) => {
  await testDB(
    res,
    next,
    `UPDATE transportation SET transportation_type = $1 WHERE transportation_id = $2 RETURNING *;`,
    ["long-distance bus", 9],
    "update transportation by id"
  );
});

router.get("/deleteTransportationById", async (req, res, next) => {
  await testDB(
    res,
    next,
    `DELETE FROM transportation WHERE transportation_id = $1 RETURNING *;`,
    [9],
    "delete transportation by id"
  );
});

router.get("/transportationIdRequired", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO transportation(trip_id, transportation_type) VALUES($1, $2) RETURNING *;`,
    [null, "metro"],
    "DB TABLE transportation trip_id NOT NULL constraint have vulnerabilities"
  );
});

router.get("/transportationTypeRequired", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO transportation(trip_id, company) VALUES($1, $2) RETURNING *;`,
    [1, "company"],
    "DB TABLE transportation transportation_type NOT NULL constraint have vulnerabilities"
  );
});

router.get("/transportationTypeEnum", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO transportation(trip_id, transportation_type) VALUES($1, $2) RETURNING *;`,
    [1, "non valid transportation_type"],
    "DB TABLE transportation transportation_type ENUM constraint have vulnerabilities"
  );
});

router.get("/companyMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    transportation(trip_id, transportation_type, company) VALUES($1, $2, $3) RETURNING *;`,
    [
      1,
      "metro",
      "maxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenght",
    ],
    "DB TABLE transportation company MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/locationFromMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    transportation(trip_id, transportation_type, location_from) VALUES($1, $2, $3) RETURNING *;`,
    [
      1,
      "metro",
      "maxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenght",
    ],
    "DB TABLE transportation location_from MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/locationToMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    transportation(trip_id, transportation_type, location_to) VALUES($1, $2, $3) RETURNING *;`,
    [
      1,
      "metro",
      "maxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenght",
    ],
    "DB TABLE transportation location_to MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/seatMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    transportation(trip_id, transportation_type, seat) VALUES($1, $2, $3) RETURNING *;`,
    [
      1,
      "metro",
      "maxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenght",
    ],
    "DB TABLE transportation seat MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/infoMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    transportation(trip_id, transportation_type, additional_info) VALUES($1, $2, $3) RETURNING *;`,
    [
      1,
      "metro",
      "maxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenghtmaxlenght",
    ],
    "DB TABLE transportation additional_info MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/priceMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    transportation(trip_id, transportation_type, price) VALUES($1, $2, $3) RETURNING *;`,
    [1, "metro", 10000000000],
    "DB TABLE transportation price MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/commissionMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    transportation(trip_id, transportation_type, commission) VALUES($1, $2, $3) RETURNING *;`,
    [1, "metro", 10000000000],
    "DB TABLE transportation commission MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/amountPayedMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    transportation(trip_id, transportation_type, amount_payed) VALUES($1, $2, $3) RETURNING *;`,
    [1, "metro", 10000000000],
    "DB TABLE transportation amount_payed MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/dateFromType", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    transportation(trip_id, transportation_type, date_from) VALUES($1, $2, $3) RETURNING *;`,
    [1, "metro", "not a date"],
    "DB TABLE transportation date_from TYPE constraint have vulnerabilities"
  );
});

router.get("/dateToType", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    transportation(trip_id, transportation_type, date_to) VALUES($1, $2, $3) RETURNING *;`,
    [1, "metro", "not a date"],
    "DB TABLE transportation date_to TYPE constraint have vulnerabilities"
  );
});

export default router;
