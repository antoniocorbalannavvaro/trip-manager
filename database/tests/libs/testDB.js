import pool from "../../../src/db.js";

export async function testDB(
  response,
  nextFunction,
  query,
  values = [],
  message
) {
  try {
    const result = await pool.query(`${query}`, [...values]);
    if (result.rowCount === 0) {
      res.status(404);
    }
    response.status(200).json({
      success: message,
      result: result.rows,
    });
  } catch (error) {
    nextFunction(error);
  }
}
