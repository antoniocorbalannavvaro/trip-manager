import pool from "../../../src/db.js";

export async function test(response, nextFunction, query, values, message) {
  try {
    const result = await pool.query(`${query}`, [...values]);
    response.status(200).json({
      success: message,
      result: result.rows,
    });
  } catch (error) {
    nextFunction(error);
  }
}
