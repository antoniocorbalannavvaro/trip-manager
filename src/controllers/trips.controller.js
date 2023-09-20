import pool from "../db.js";

export const getAllTrips = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM trips;");
    if (result.rowCount === 0) {
      res.status(403).json({
        message: "No Trips Yet",
      });
    }
    res.status(200).send(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getTrip = async (req, res, next) => {
  try {
    const tripId = req.params.id;
    const result = await pool.query("SELECT * FROM trips WHERE trip_id = $1", [
      tripId,
    ]);
    if (result.rowCount === 0) {
      res.status(403).json({
        message: `No Trips with id ${tripId} was found`,
      });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const createTrip = async (req, res, next) => {
  try {
    const { customerId, description } = req.body;
    const result = await pool.query(
      "INSERT INTO trips(customer_id, description) VALUES ($1, $2) RETURNING *",
      [customerId, description]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const deleteTrip = async (req, res, next) => {
  try {
    const tripId = req.params.id;
    const result = await pool.query(
      "DELETE FROM trips WHERE trip_id = $1 RETURNING *;",
      [tripId]
    );
    if (result.rowCount === 0) {
      res.status(403).json({
        message: "Trip doesn't exists",
      });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const updateTrip = async (req, res, next) => {
  try {
    const tripId = req.params.id;
    const { description } = req.body;

    const result = await pool.query(
      "UPDATE trips SET description = $1 WHERE trip_id = $2 RETURNING *;",
      [description, tripId]
    );
    if (result.rowCount === 0) {
      res.status(403).json({
        message: "Trip doesn't exists",
      });
    }
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};
