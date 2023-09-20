import { Router } from "express";
import pool from "../../../src/db.js";

const router = Router();

router.get("/createTrip", async (req, res, next) => {
  try {
    const result = await pool.query(
      `INSERT INTO 
      trip(customer_id, description, state)
      VALUES ($1, $2, $3) RETURNING *
      ;`,
      [1]
    );

    res.status(200).json({
      success: "Create customer",
      proof: { customer_id: result.rows[0].customer_id },
    });
  } catch (error) {
    next(error);
  }
});

export default router;
