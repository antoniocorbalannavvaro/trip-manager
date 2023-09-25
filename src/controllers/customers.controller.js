import pool from "../db.js";

export const getAllCustomers = async (req, res, next) => {
  try {
    const allCustomers = await pool.query(
      "SELECT * FROM customers WHERE user_id = $1",
      [res.locals.user.rows[0].user_id]
    );
    if (allCustomers.rowCount === 0) {
      return res.status(403).json({
        message: "No Customers Yet",
      });
    }
    res.status(200).json(allCustomers.rows);
  } catch (error) {
    next(error);
  }
};

export const getCustomer = async (req, res, next) => {
  try {
    const customerId = req.params.id;

    const result = await pool.query(
      `SELECT * FROM customers WHERE customer_id = $1 AND user_id = $2`,
      [customerId, res.locals.user.rows[0].user_id]
    );

    if (result.rowCount === 0) {
      res.status(403).json({
        message: `No user with id ${customerId}`,
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const createCustomer = async (req, res, next) => {
  try {
    const { firstName, lastName, email, dni, phonePrefix, phone, gender } =
      req.body;

    const result = await pool.query(
      "INSERT INTO customers(user_id, first_name, last_name, email, dni, phone_prefix, phone, gender) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        res.locals.user.rows[0].user_id,
        firstName,
        lastName,
        email,
        dni,
        phonePrefix,
        phone,
        gender,
      ]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteCustomer = async (req, res, next) => {
  try {
    const customerId = req.params.id;
    const result = await pool.query(
      "DELETE FROM customers WHERE customer_id = $1 RETURNING *",
      [customerId]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateCustomer = async (req, res, next) => {
  try {
    const customerId = req.params.id;
    const { firstName, lastName, email, dni, phonePrefix, phone, gender } =
      req.body;

    const result = await pool.query(
      "UPDATE customers SET user_id = $1, first_name = $2, last_name = $3, email = $4, dni = $5, phone_prefix = $6, phone = $7, gender = $8 WHERE customer_id = $9 RETURNING *",
      [
        res.locals.user.rows[0].user_id,
        firstName,
        lastName,
        email,
        dni,
        phonePrefix,
        phone,
        gender,
        customerId,
      ]
    );

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};
