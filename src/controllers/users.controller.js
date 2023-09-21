import pool from "../db.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM users;");
    if (result.rowCount === 0) {
      res.status(403).json({
        error: "No users yet",
      });
    }
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await pool.query("SELECT * FROM users WHERE user_id = $1", [
      userId,
    ]);
    if (result.rowCount === 0) {
      res.status(403).json({
        error: `User with id ${userId} doesn't exist`,
      });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const { userName, email, password, gender, dni } = req.body;
    const result = await pool.query(
      "INSERT INTO users (user_name, email, password, gender, dni) VALUES ($1, $2, $3, $4, $5) RETURNING *;",
      [userName, email, password, gender, dni]
    );
    if (result.rowCount === 0) {
      res.status(403).json({
        error: "Invalid key or value to create user",
      });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const result = await pool.query(
      "DELETE FROM users WHERE user_id = $1 RETURNING *",
      [userId]
    );
    if (result.rowCount === 0) {
      res.status(403).json({
        error: "User not found",
      });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const userSelected = await pool.query(
      "SELECT * FROM users WHERE user_id = $1",
      [userId]
    );

    const { userName, email, password, gender, dni } = req.body;
    const result = await pool.query(
      "UPDATE users SET user_name = $1, email = $2, password = $3, gender = $4, dni = $5 WHERE user_id = $6 RETURNING *",
      [userName, email, password, gender, dni, userId]
    );

    if (result.rowCount === 0 || userSelected.rowCount === 0) {
      res.status(403).json({
        error: "User not found",
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};
