import pool from "../db.js";

export const getAllTransportations = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM transportation;");
    if (result.rowCount === 0) {
      return res.status(403).json({
        message: "No transportations yet",
      });
    }
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getOneTransport = async (req, res, next) => {
  try {
    const transportationId = req.params.id;
    const result = await pool.query(
      `SELECT * 
      FROM transportation 
      WHERE transportation_id = $1`,
      [transportationId]
    );
    if (result.rowCount === 0) {
      res.status(403).json({
        message: `No transportation with id ${transportationId}`,
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const createTransport = async (req, res, next) => {
  try {
    const {
      tripId,
      transportationType,
      company,
      dateFrom,
      dateTo,
      locationFrom,
      locationTo,
      seat,
      price,
      commission,
      additionalInfo,
      receipt,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO 
      transportation(
        trip_id,
        transportation_type,
        company,
        date_from,
        date_to,
        location_from,
        location_to,
        seat,
        price,
        commission,
        additional_info,
        receipt) 
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) 
        RETURNING *;`,
      [
        tripId,
        transportationType,
        company,
        dateFrom,
        dateTo,
        locationFrom,
        locationTo,
        seat,
        price,
        commission,
        additionalInfo,
        receipt,
      ]
    );
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const deleteTransport = async (req, res, next) => {
  try {
    const transportationId = req.params.id;
    const result = await pool.query(
      "DELETE FROM transportation WHERE transportation_id = $1 RETURNING *",
      [transportationId]
    );
    if (result.rowCount === 0) {
      res.status(403).json({
        message: `No transportation with id ${transportationId}`,
      });
    }
    res.status(200).json({
      message: "Successfully",
      transportation: result.rows[0],
    });
  } catch (error) {
    next(next);
  }
};

export const updateTransport = async (req, res, next) => {
  try {
    const transportationId = req.params.id;
    const transportationSelected = await pool.query(
      "SELECT * FROM transportation WHERE transportation_id = $1",
      [transportationId]
    );
    const {
      tripId,
      transportationType,
      company,
      dateFrom,
      dateTo,
      locationFrom,
      locationTo,
      seat,
      price,
      commission,
      additionalInfo,
      receipt,
    } = req.body;
    const result = await pool.query(
      `UPDATE transportation 
      SET
      trip_id = $1,
      transportation_type = $2,
      company = $3,
      date_from = $4,
      date_to = $5,
      location_from = $6,
      location_to = $7,
      seat = $8,
      price = $9,
      commission = $10,
      additional_info = $11,
      receipt = $12
      WHERE transportation_id = $13 RETURNING *`,
      [
        tripId,
        transportationType,
        company,
        dateFrom,
        dateTo,
        locationFrom,
        locationTo,
        seat,
        price,
        commission,
        additionalInfo,
        receipt,
        transportationId,
      ]
    );

    if (result.rowCount === 0) {
      res.status(403).json({
        message: `No transportation with id ${transportationId}`,
      });
    }

    res.status(200).json({
      message: "Successfully Update",
      oldTransportation: transportationSelected.rows,
      newTransportation: result.rows,
    });
  } catch (error) {
    next(error);
  }
};
