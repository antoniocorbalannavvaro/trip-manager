import pool from "../db.js";

export const getAllhostes = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM host;");
    if (result.rowCount === 0) {
      return res.status(403).json({
        message: "No host Yet",
      });
    }
    res.status(200).json(result.rows);
  } catch (error) {
    next(error);
  }
};

export const getOnehost = async (req, res, next) => {
  try {
    const hostId = req.params.id;
    const result = await pool.query(
      `SELECT * 
      FROM host 
      WHERE host_id = $1`,
      [hostId]
    );
    if (result.rowCount === 0) {
      res.status(403).json({
        message: `No host with id ${hostId}`,
      });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const createHost = async (req, res, next) => {
  try {
    const {
      tripId,
      hostType,
      hostName,
      hostCountry,
      hostCity,
      hostAddress,
      roomNum,
      dateFrom,
      dateTo,
      price,
      commission,
      additionalInfo,
      receipt,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO 
      host(
        trip_id, 
        host_type, 
        host_name, 
        host_country,
        host_city,
        host_address, 
        room_num, 
        date_from, 
        date_to, 
        price, 
        commission, 
        additional_info, 
        receipt) 
        VALUES 
        ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) 
        RETURNING *;`,
      [
        tripId,
        hostType,
        hostName,
        hostCountry,
        hostCity,
        hostAddress,
        roomNum,
        dateFrom,
        dateTo,
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

export const deleteHost = async (req, res, next) => {
  try {
    const hostId = req.params.id;
    const result = await pool.query(
      "DELETE FROM host WHERE host_id = $1 RETURNING *",
      [hostId]
    );
    if (result.rowCount === 0) {
      res.status(403).json({
        message: "Host not found",
      });
    }
    res.status(200).json({
      message: "Successfully",
      user: result.rows[0],
    });
  } catch (error) {
    next(next);
  }
};

export const updateHost = async (req, res, next) => {
  try {
    const hostId = req.params.id;
    const hostSelected = await pool.query(
      "SELECT * FROM host WHERE host_id = $1",
      [hostId]
    );
    const {
      tripId,
      hostType,
      hostName,
      hostCountry,
      hostCity,
      hostAddress,
      roomNum,
      dateFrom,
      dateTo,
      price,
      commission,
      additionalInfo,
      receipt,
    } = req.body;
    const result = await pool.query(
      `UPDATE host 
      SET
      trip_id = $1, 
      host_type = $2, 
      host_name = $3, 
      host_country = $4, 
      host_city = $5, 
      host_address = $6, 
      room_num = $7, 
      date_from = $8, 
      date_to = $9, 
      price = $10, 
      commission = $11, 
      additional_info = $12, 
      receipt = $13
      WHERE host_id = $14 RETURNING *`,
      [
        tripId,
        hostType,
        hostName,
        hostCountry,
        hostCity,
        hostAddress,
        roomNum,
        dateFrom,
        dateTo,
        price,
        commission,
        additionalInfo,
        receipt,
        hostId,
      ]
    );

    if (result.rowCount === 0) {
      res.status(403).json({
        message: `No host with id ${hostId}`,
      });
    }

    res.status(200).json({
      message: "Successfully Update",
      oldHost: hostSelected.rows,
      newHost: result.rows,
    });
  } catch (error) {
    next(error);
  }
};
