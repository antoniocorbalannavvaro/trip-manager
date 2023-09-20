import { Router } from "express";
import { testDB } from "../libs/testDB.js";

const router = Router();

router.get("/createCustomer", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO customers(user_id, first_name, last_name, email, dni, phone_prefix, phone, gender)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
    [
      1,
      "new customer",
      "from test",
      "test@gmail.com",
      "33445566F",
      "+34",
      1234567890,
      "others",
    ],
    "create customer"
  );
});
router.get("/getAllCustomers", async (req, res, next) => {
  await testDB(res, next, `SELECT * FROM customers;`, [], "get all customers");
});

router.get("/getCustomerById", async (req, res, next) => {
  await testDB(
    res,
    next,
    `SELECT * FROM customers WHERE customer_id = 3;`,
    [],
    "get customer by id"
  );
});

router.get("/updateCustomer", async (req, res, next) => {
  await testDB(
    res,
    next,
    `UPDATE customers SET first_name = $1 
    WHERE customer_id = $2 RETURNING *`,
    ["New name for customer", 3],
    "update customer"
  );
});

router.get("/deleteCustomer", async (req, res, next) => {
  await testDB(
    res,
    next,
    `DELETE FROM customers WHERE customer_id = $1;`,
    [3],
    "delete user"
  );
});

router.get("/userIdRequired", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    customers(first_name, last_name, email, dni, phone_prefix, phone, gender)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
    [
      "new customer",
      "from test",
      "test@gmail.com",
      "33445566F",
      "+34",
      1234567890,
      "others",
    ],
    "DB TABLE customers fk_user_id have vulnerabilities"
  );
});

router.get("/emailRequired", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    customers(user_id)
    VALUES ($1) RETURNING *;`,
    [1],
    "DB TABLE customers email NOT NULL contraint have vulnerabilities"
  );
});

router.get("/uniqueEmail", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    customers(user_id, email)
    VALUES ($1, $2) RETURNING *
    ;`,
    [1, "pepe@gmail.com"],
    "DB TABLE customers email UNIQUE contraint have vulnerabilities"
  );
});

router.get("/uniqueDni", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    customers(user_id, email, dni)
    VALUES ($1, $2, $3) RETURNING *
    ;`,
    [1, "user1@gmail.com", "54657687F"],
    "DB TABLE customers dni UNIQUE contraint have vulnerabilities"
  );
});

router.get("/uniquePhone", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    customers(user_id, email, dni, phone)
    VALUES ($1, $2, $3, $4) RETURNING *
    ;`,
    [1, "user3@gmail.com", 11, "634567690"],
    "DB TABLE customers phone UNIQUE contraint have vulnerabilities"
  );
});

router.get("/firstNamelengthConstraint", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    customers(user_id, email, first_name)
    VALUES ($1, $2, $3) RETURNING *;`,
    [
      1,
      "user4@gmail.com",
      "firstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstname",
    ],
    "DB TABLE customers first_name MAX_LENGTH contraint have vulnerabilities"
  );
});

router.get("/lastNamelengthConstraint", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    customers(user_id, email, last_name)
    VALUES ($1, $2, $3) RETURNING *;`,
    [
      1,
      "user4@gmail.com",
      "firstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstname",
    ],
    "DB TABLE customers first_name MAX_LENGTH contraint have vulnerabilities"
  );
});

router.get("/emailLengthConstraint", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    customers(user_id, first_name, email)
    VALUES ($1, $2, $3) RETURNING *;`,
    [
      1,
      "nombre",
      "firstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstname",
    ],
    "DB TABLE customers email MAX_LENGTH contraint have vulnerabilities"
  );
});

router.get("/dnilengthConstraint", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    customers(user_id, dni, email)
    VALUES ($1, $2, $3) RETURNING *;`,
    [1, "dnidnidnidnidnidnidnidnidnidnidni", "nuevo1@gmail.com"],
    "DB TABLE customers email MAX_LENGTH contraint have vulnerabilities"
  );
});

router.get("/prefixLengthConstraint", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    customers(user_id, phone_prefix, email)
    VALUES ($1, $2, $3) RETURNING *;`,
    [1, "dnidnidnidnidnidnidnidnidnidnidni", "nuevo2@gmail.com"],
    "DB TABLE customers phone_prefix MAX_LENGTH contraint have vulnerabilities"
  );
});

router.get("/phoneLengthConstraint", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO 
    customers(user_id, phone, email)
    VALUES ($1, $2, $3) RETURNING *;`,
    [1, "dnidnidnidnidnidnidnidnidnidnidni", "nuevo3@gmail.com"],
    "DB TABLE customers phone MAX_LENGTH contraint have vulnerabilities"
  );
});

export default router;
