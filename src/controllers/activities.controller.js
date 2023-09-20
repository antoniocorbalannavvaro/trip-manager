import pool from "../db.js";

export const getAllActivities = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM activities;");
    if (result.rowCount === 0) {
      return res.status(403).json({
        message: "No activities yet",
      });
    }
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getOneActivity = async (req, res, next) => {
  try {
    const activityId = req.params.id;
    const result = await pool.query(
      `SELECT * 
      FROM activities 
      WHERE activity_id = $1`,
      [activityId]
    );
    if (result.rowCount === 0) {
      res.status(403).json({
        message: `No activity with id ${activityId}`,
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const createActivity = async (req, res, next) => {
  try {
    const {
      tripId,
      company,
      dateFrom,
      dateTo,
      activitiyLocation,
      price,
      commission,
      activityDescription,
      receipt,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO 
      activities(
        trip_id,
        company,
        date_from,
        date_to,
        activitiy_location,
        price,
        commission,
        activity_description,
        receipt) 
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9) 
        RETURNING *;`,
      [
        tripId,
        company,
        dateFrom,
        dateTo,
        activitiyLocation,
        price,
        commission,
        activityDescription,
        receipt,
      ]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const deleteActivity = async (req, res, next) => {
  try {
    const activityId = req.params.id;
    const result = await pool.query(
      "DELETE FROM activities WHERE activity_id = $1 RETURNING *",
      [activityId]
    );
    if (result.rowCount === 0) {
      res.status(403).json({
        message: `No activity with id ${activityId}`,
      });
    }
    res.status(200).json({
      message: "Successfully",
      activity: result.rows[0],
    });
  } catch (error) {
    next(next);
  }
};

export const updateActivity = async (req, res, next) => {
  try {
    const activityId = req.params.id;
    const activitySelected = await pool.query(
      "SELECT * FROM activities WHERE activity_id = $1",
      [activityId]
    );
    const {
      tripId,
      company,
      dateFrom,
      dateTo,
      activityDescription,
      price,
      commission,
      additionalInfo,
      receipt,
    } = req.body;
    const result = await pool.query(
      `UPDATE activities 
      SET
      trip_id = $1,
      company = $2,
      date_from = $3,
      date_to = $4,
      activitiy_location = $5,
      price = $6,
      commission = $7,
      activitiy_location = $8,
      receipt = $9
      WHERE activity_id = $10 RETURNING *`,
      [
        tripId,
        company,
        dateFrom,
        dateTo,
        activityDescription,
        price,
        commission,
        additionalInfo,
        receipt,
        activityId,
      ]
    );

    if (result.rowCount === 0) {
      res.status(403).json({
        message: `No activity with id ${activityId}`,
      });
    }

    res.status(200).json({
      message: "Successfully Update",
      OldActivity: activitySelected.rows,
      newActivity: result.rows,
    });
  } catch (error) {
    next(error);
  }
};
