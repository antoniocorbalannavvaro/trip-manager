import pool from "../db.js";
import { createToken, maxAge } from "../libs/jwt.js";

export const register = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;

    const result = await pool.query(
      `INSERT INTO 
      users(user_name, email, password)
      VALUES ($1, $2, pgp_sym_encrypt($3, $4)) RETURNING *;
      `,
      [userName, email, password, process.env.DB_PASSWORD_ENCRYPT]
    );

    if (result.rowCount === 0) {
      res.status(403).json({ error: "a avido un error" });
    }

    const token = createToken(result.rows[0].user_id);

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
    });

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query(
      `SELECT * FROM users
      WHERE 
      email = $1 
      AND 
      PGP_SYM_DECRYPT(password::bytea, $2) = $3;`,
      [email, process.env.DB_PASSWORD_ENCRYPT, password]
    );

    if (result.rowCount === 0) {
      res.status(403).json({ error: "invalid email or password" });
    }

    const token = createToken(result.rows[0].user_id);

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
    });

    res.json(result.rows[0]);
    if (result.rowCount === 0) {
      res.status(403).json({ error: "invalid password or email" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const logout = (req, res, next) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.json({ message: "user logout" });
  } catch (error) {
    next(error);
  }
};
