import { Router } from "express";
import pool from "../../../src/db.js";

const router = Router();

router.get("/createCustomer", async (req, res, next) => {
  try {
    const result = await pool.query(
      `INSERT INTO 
      customers(user_id, first_name, last_name, email, dni, phone_prefix, phone, gender)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *
      ;`,
      [
        1,
        "new customer",
        "from test",
        "test@gmail.com",
        "33445566F",
        "+34",
        1234567890,
        "others",
      ]
    );
    res.status(200).json({
      success: "Create customer",
      proof: { customer_id: result.rows[0].customer_id },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/getAllCustomers", async (req, res, next) => {
  try {
    const result = await pool.query(`SELECT * FROM customers;`);
    res.status(200).json({
      success: "Get all customers",
      proof: { customersLenght: result.rowCount },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/getCustomerById", async (req, res, next) => {
  try {
    const result = await pool.query(
      `SELECT * FROM customers WHERE customer_id = 3;`
    );
    res.status(200).json({
      success: "Get customer by id",
      proof: {
        id: result.rows[0].customer_id,
        name: result.rows[0].first_name,
      },
    });
  } catch (error) {
    res.status(403).json({
      success: `Can't select non exist customer`,
    });
  }
});

router.get("/updateCustomer", async (req, res, next) => {
  try {
    const customerToUpdate = await pool.query(
      "SELECT first_name FROM customers WHERE customer_id = 3"
    );
    const result = await pool.query(
      `UPDATE customers 
      SET user_id = $1, first_name = $2, last_name = $3, 
      email = $4, dni = $5, phone_prefix = $6, phone = $7, 
      gender = $8 
      WHERE customer_id = $9 RETURNING *`,
      [
        1,
        "UPDATED CUSTOMER",
        "from test",
        "test@gmail.com",
        "33445566F",
        "+34",
        1234567890,
        "others",
        3,
      ]
    );
    res.status(200).json({
      success: "Update customer",
      proof: {
        before: customerToUpdate.rows[0].first_name,
        after: result.rows[0].first_name,
      },
    });
  } catch (error) {
    res.status(403).json({
      success: `Can't update non exist customer`,
    });
  }
});

router.get("/deleteCustomer", async (req, res, next) => {
  try {
    const result = await pool.query(
      `DELETE FROM customers WHERE customer_id = 3;`
    );
    res.status(200).json({
      success: "Delete user",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/createCustomerWithNoUserRef", async (req, res, next) => {
  try {
    const result = await pool.query(
      `INSERT INTO 
      customers(first_name, last_name, email, dni, phone_prefix, phone, gender)
      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
      ;`,
      [
        "new customer",
        "from test",
        "test@gmail.com",
        "33445566F",
        "+34",
        1234567890,
        "others",
      ]
    );
    res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/emailRequired", async (req, res, next) => {
  try {
    const result = await pool.query(
      `INSERT INTO 
      customers(user_id)
      VALUES ($1) RETURNING *
      ;`,
      [1]
    );
    res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/uniqueEmail", async (req, res, next) => {
  try {
    const result1 = await pool.query(
      `INSERT INTO 
      customers(user_id, email)
      VALUES ($1, $2) RETURNING *
      ;`,
      [1, "antoniocn1996@gmail.com"]
    );
    const result2 = await pool.query(
      `INSERT INTO 
      customers(user_id, email)
      VALUES ($1, $2) RETURNING *
      ;`,
      [1, "antoniocn1996@gmail.com"]
    );
    res.json({
      result1,
      result2,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/uniqueDni", async (req, res, next) => {
  try {
    const result1 = await pool.query(
      `INSERT INTO 
      customers(user_id, email, dni)
      VALUES ($1, $2, $3) RETURNING *
      ;`,
      [1, "user1@gmail.com", 3344556677]
    );
    const result2 = await pool.query(
      `INSERT INTO 
      customers(user_id, email, dni)
      VALUES ($1, $2, $3) RETURNING *
      ;`,
      [1, "user2@gmail.com", 3344556677]
    );
    res.json({
      result1,
      result2,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/uniquePhone", async (req, res, next) => {
  try {
    const result1 = await pool.query(
      `INSERT INTO 
      customers(user_id, email, dni, phone)
      VALUES ($1, $2, $3, $4) RETURNING *
      ;`,
      [1, "user3@gmail.com", 11, 603010101]
    );
    const result2 = await pool.query(
      `INSERT INTO 
      customers(user_id, email, dni, phone)
      VALUES ($1, $2, $3, $4) RETURNING *
      ;`,
      [1, "user4@gmail.com", 22, 603010101]
    );
    res.json({
      result1,
      result2,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/firstNamelengthConstraint", async (req, res, next) => {
  try {
    const result = await pool.query(
      `INSERT INTO 
      customers(user_id, email, first_name)
      VALUES ($1, $2, $3) RETURNING *
      ;`,
      [
        1,
        "user4@gmail.com",
        "firstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstname",
      ]
    );
    res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/lastNamelengthConstraint", async (req, res, next) => {
  try {
    const result = await pool.query(
      `INSERT INTO 
      customers(user_id, email, last_name)
      VALUES ($1, $2, $3) RETURNING *
      ;`,
      [
        1,
        "user4@gmail.com",
        "firstnalast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namelast_namemefirstname",
      ]
    );
    res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/emailLengthConstraint", async (req, res, next) => {
  try {
    const result = await pool.query(
      `INSERT INTO 
      customers(user_id, email, first_name)
      VALUES ($1, $2, $3) RETURNING *
      ;`,
      [
        1,
        "firstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstnamefirstname@gmail.com",
        "name",
      ]
    );
    res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/dnilengthConstraint", async (req, res, next) => {
  try {
    const result = await pool.query(
      `INSERT INTO 
      customers(user_id, email, dni)
      VALUES ($1, $2, $3) RETURNING *
      ;`,
      [1, "user4@gmail.com", "999999999999999999999999999999"]
    );
    res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/prefixLengthConstraint", async (req, res, next) => {
  try {
    const result = await pool.query(
      `INSERT INTO 
      customers(user_id, email, phone_prefix)
      VALUES ($1, $2, $3) RETURNING *
      ;`,
      [1, "user4@gmail.com", "firstnamefirstname"]
    );
    res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/phoneLengthConstraint", async (req, res, next) => {
  try {
    const result = await pool.query(
      `INSERT INTO 
      customers(user_id, email, phone)
      VALUES ($1, $2, $3) RETURNING *
      ;`,
      [1, "user4@gmail.com", "1111111111111111111111"]
    );
    res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
