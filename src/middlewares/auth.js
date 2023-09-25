import jwt from "jsonwebtoken";
import pool from "../db.js";

export const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
      if (err) {
        res.json({ error: "unauthorized user." });
      } else {
        next();
      }
    });
  } else {
    res.json({ error: "unauthorized user" });
  }
};

export const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      async (err, decodedToken) => {
        if (err) {
          res.locals.user = null;
          next();
        } else {
          console.log(decodedToken);
          const user = await pool.query(
            `SELECT * FROM users WHERE user_id = $1`,
            [decodedToken.id]
          );
          res.locals.user = user;
          next();
        }
      }
    );
  } else {
    res.locals.user = null;
    next();
  }
};
