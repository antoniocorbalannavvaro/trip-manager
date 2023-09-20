import { Router } from "express";
import { testDB } from "../libs/testDB.js";

const router = Router();

router.get("/createUsers", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO users(user_name, email, password, gender, dni) 
    VALUES('Ignacio Nieto Iniesta', 'lofiu@gmail.com', 'admin1', 'male', '46657699E') RETURNING *;`,
    [],
    "create user"
  );
});

router.get("/getUsers", async (req, res, next) => {
  await testDB(res, next, `SELECT * FROM users;`, [], "get all users");
});

router.get("/getUserById", async (req, res, next) => {
  await testDB(
    res,
    next,
    `SELECT * FROM users WHERE user_id = $1;`,
    [2],
    "get user by id"
  );
});

router.get("/updateUser", async (req, res, next) => {
  await testDB(
    res,
    next,
    `UPDATE users SET user_name = 'Nuevo nombre' WHERE user_id = $1 RETURNING *;`,
    [2],
    "update user"
  );
});

router.get("/deleteUser", async (req, res, next) => {
  await testDB(
    res,
    next,
    `DELETE FROM users WHERE user_id = $1`,
    [2],
    "delete users"
  );
});

router.get("/updateNonExistUser", async (req, res, next) => {
  await testDB(
    res,
    next,
    `UPDATE users SET user_name = 'Nuevo nombre' WHERE user_id = $1 RETURNING *;`,
    [2],
    "DB TABLE users dni UNIQUE constraint have vulnerabilities"
  );
});

router.get("/uniqueUserName", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO users(user_name, email, password, gender, dni) 
    VALUES('true', 'antoniocn1996@gmail.com', 'admin1', 'male', '11111F') RETURNING *;`,
    [],
    "DB TABLE users user_name UNIQUE constraint have vulnerabilities"
  );
});

router.get("/uniqueEmail", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO users(user_name, email, password, gender, dni) 
    VALUES('Nuevo', 'true', 'admin1', 'male', 'nuevo') RETURNING *;`,
    [],
    "DB TABLE users email UNIQUE constraint have vulnerabilities"
  );
});

router.get("/uniqueDni", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO users(user_name, email, password, gender, dni) 
    VALUES('Nuevo', 'nuevo', 'admin1', 'male', 'true') RETURNING *;`,
    [],
    "DB TABLE users dni UNIQUE constraint have vulnerabilities"
  );
});

router.get("/passwordRequired", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO users(user_name, email, password) 
    VALUES('user1', 'user1@gmail.com', $1) RETURNING *;`,
    [null],
    "DB TABLE users password NOT NULL constraint have vulnerabilities"
  );
});

router.get("/emailRequired", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO users(user_name, email, password) 
    VALUES('user1', $1, 'password' ) RETURNING *;`,
    [null],
    "DB TABLE users email NOT NULL constraint have vulnerabilities"
  );
});

router.get("/usernameRequired", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO users(user_name, email, password) 
    VALUES($1, 'user@gmail.com', 'password' ) RETURNING *;`,
    [null],
    "DB TABLE users user_name NOT NULL constraint have vulnerabilities"
  );
});

router.get("/userNameMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `UPDATE users SET user_name = 'nombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombre' WHERE user_id = 1 RETURNING *`,
    [],
    "DB TABLE users user_name MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/emailMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `UPDATE users SET email = 'nombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombre' WHERE user_id = 1 RETURNING *`,
    [],
    "DB TABLE users email MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/dniMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `UPDATE users SET dni = 'nombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombre' WHERE user_id = 1 RETURNING *`,
    [],
    "DB TABLE users dni MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/passwordMaxLenght", async (req, res, next) => {
  await testDB(
    res,
    next,
    `UPDATE users SET password = 'nombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombre' WHERE user_id = 1 RETURNING *`,
    [],
    "DB TABLE users password MAX_LENGTH constraint have vulnerabilities"
  );
});

router.get("/usersTypeConstraintTryNumeric", async (req, res, next) => {
  await testDB(
    res,
    next,
    `UPDATE users SET user_name = $1, email = $1, password = $1, dni = $1 WHERE user_id = 1 RETURNING *;`,
    [1],
    "Parsing type NUMERIC to VARCHAR"
  );
});

router.get("/usersTypeConstraintTryBoolean", async (req, res, next) => {
  await testDB(
    res,
    next,
    `UPDATE users SET user_name = $1, email = $1, password = $1, dni = $1 WHERE user_id = 1 RETURNING *;`,
    [true],
    "Parsing type BOOLEAN to VARCHAR"
  );
});

router.get("/enumConstraint", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO users(user_name, email, password, gender, dni) 
    VALUES('userTest', 'userTest@gmail.com', 'userTest', $1, 'userTest') RETURNING *;`,
    ["no valid gender inserted"],
    "DB TABLE users gender ENUM constraint have vulnerabilities"
  );
});

export default router;
