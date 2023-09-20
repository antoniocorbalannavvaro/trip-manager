import { Router } from "express";
import { testDB } from "../libs/testDB.js";

const router = Router();

router.get("/createHost", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO host(trip_id, host_type, host_name, host_country, host_city, host_address, room_num, date_from, date_to, price, commission, additional_info, amount_payed) 
    VALUES ($1 ,$2 ,$3 ,$4 ,$5 ,$6 ,$7 ,$8 ,$9 ,$10 ,$11 ,$12, $13) RETURNING *;`,
    [
      1,
      "camping",
      "Camping Molina",
      "España",
      "Murcia",
      "Valle de Molina",
      "Cuadrante 7",
      "2023-01-01 13:50:00",
      "2023-02-10 08:20:00",
      129.99,
      83.0,
      "Hay muchos mosquitos",
      9.99,
    ],
    ""
  );
});

router.get("/getAllHostes", async (req, res, next) => {
  await testDB(res, next, `SELECT * FROM host;`, [], "BIEN");
});

router.get("/getHostById/:id", async (req, res, next) => {
  const id = req.params.id;
  await testDB(
    res,
    next,
    `SELECT * FROM host WHERE host_id = $1;`,
    [id],
    "BIEN"
  );
});

router.get("/deleteHostById/:id", async (req, res, next) => {
  const id = req.params.id;
  await testDB(
    res,
    next,
    `DELETE FROM host WHERE host_id = $1 RETURNING *;`,
    [id],
    "BIEN"
  );
});

router.get("/updateHostById/:id", async (req, res, next) => {
  const id = req.params.id;
  await testDB(
    res,
    next,
    `UPDATE host SET host_city = $1 WHERE host_id = $2 RETURNING *;`,
    ["NEW CITY", id],
    "BIEN"
  );
});

router.get("/createHostWithNoTripId", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO host(trip_id)
    VALUES ($1) RETURNING *;`,
    [null],
    "BIEN"
  );
});

router.get("/invalidHostTypeEnum", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO host(trip_id, host_type)
    VALUES ($1, $2) RETURNING *;`,
    [1, "casa"],
    "DB TABLE trips host_type ENUM constraint have vulnerabilities"
  );
});

router.get("/hostNameMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO host(trip_id, host_name)
    VALUES ($1, $2) RETURNING *;`,
    [
      1,
      "casacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasa",
    ],
    "DB TABLE host host_name MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/hostCountryMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO host(trip_id, host_country)
    VALUES ($1, $2) RETURNING *;`,
    [
      1,
      "casacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasa",
    ],
    "DB TABLE host host_country MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/hostCityMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO host(trip_id, host_city)
    VALUES ($1, $2) RETURNING *;`,
    [
      1,
      "casacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasa",
    ],
    "DB TABLE host host_city MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/hostAddressMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO host(trip_id, host_address)
    VALUES ($1, $2) RETURNING *;`,
    [
      1,
      "casacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasa",
    ],
    "DB TABLE host host_address MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/roomNumMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO host(trip_id, room_num)
    VALUES ($1, $2) RETURNING *;`,
    [
      1,
      "casacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasa",
    ],
    "DB TABLE host room_num MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/priceMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO host(trip_id, price)
    VALUES ($1, $2) RETURNING *;`,
    [1, 100000000.99],
    "DB TABLE host price MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/commissionMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO host(trip_id, commission)
    VALUES ($1, $2) RETURNING *;`,
    [1, 1000],
    "DB TABLE host commission MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/amountPayedMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO host(trip_id, amount_payed)
    VALUES ($1, $2) RETURNING *;`,
    [1, 999999999.99],
    "DB TABLE host amount_payed MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/additionalInfoMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO host(trip_id, additional_info)
    VALUES ($1, $2) RETURNING *;`,
    [
      1,
      "casacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasacasa",
    ],
    "DB TABLE host additional_info MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/dateFromType", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO host(trip_id, date_from)
    VALUES ($1, $2) RETURNING *;`,
    [1, "not a date from"],
    "DB TABLE host date_from TYPE constraint have vulnerabilities"
  );
});

router.get("/dateToType", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO host(trip_id, date_to)
    VALUES ($1, $2) RETURNING *;`,
    [1, "not a date to"],
    "DB TABLE host date_to TYPE constraint have vulnerabilities"
  );
});

export default router;
