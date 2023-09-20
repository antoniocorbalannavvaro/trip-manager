import { Router } from "express";
import pool from "../../../src/db.js";

const router = Router();

router.get("/createUsers", async (req, res, next) => {
  try {
    const result = await pool.query(
      `
INSERT INTO users(user_name, email, password, gender, dni)
  VALUES(
    'Antonio Corbalán Navarro',
    'antoniocn1996@gmail.com',
    'admin1',
    'male',
    '111111F') RETURNING *;

INSERT INTO users(user_name, email, password, gender, dni)
  VALUES(
      'Ignacio Nieto Iniesta',
      'lofiu@gmail.com',
      'admin1',
      'male',
      '46657699E');
`
    );

    res.status(200).json({
      success: "Create users",
      user: result.rows,
    });
  } catch (error) {
    res.json({
      success: "Can't insert user with same user_name",
      proof: error.detail,
    });
  }
});

router.get("/getUsers", async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM users;");
    res.status(200).json({
      success: "Get all users",
      users: result.rowCount,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/getUserById", async (req, res, next) => {
  try {
    const result = await pool.query(`SELECT * FROM users WHERE user_id = $1;`, [
      2,
    ]);

    res.status(200).json({
      success: "Get user by id",
      proof: {
        user_id: result.rows[0].user_id,
        user_name: result.rows[0].user_name,
      },
    });
  } catch (error) {
    res.json({
      success: "Can't get an user_id that doesn't exists",
    });
  }
});

router.get("/updateUser", async (req, res, next) => {
  try {
    const userUpdate = await pool.query(
      "SELECT user_name FROM users WHERE user_id = $1",
      [2]
    );
    const result = await pool.query(
      `
      UPDATE
        users
      SET
        user_name = 'Nuevo nombre'
      WHERE
        user_id = 2 RETURNING *;
      `
    );
    res.status(200).json({
      success: "Update User",
      proof: {
        before: userUpdate.rows[0].user_name,
        after: result.rows[0].user_name,
      },
    });
  } catch (error) {
    res.json({
      success: "Can't get an user_id that doesn't exists",
    });
  }
});

router.get("/deleteUser", async (req, res, next) => {
  try {
    const userDeleted = await pool.query(
      "SELECT * FROM users WHERE user_id = $1",
      [2]
    );
    const result = await pool.query("DELETE FROM users WHERE user_id = $1", [
      2,
    ]);
    res.status(200).json({
      success: "Delete user",
    });
  } catch (error) {
    res.status(200).json({
      success: "Delete user",
    });
  }
});

router.get("/updateNonExistUser", async (req, res, next) => {
  try {
    const userUpdate = await pool.query(
      "SELECT user_name FROM users WHERE user_id = $1",
      [2]
    );
    const result = await pool.query(
      `
      UPDATE
        users
      SET
        user_name = 'Nuevo nombre'
      WHERE
        user_id = 2 RETURNING *;
      `
    );
    res.status(200).json({
      success: "User Update",
      before: userUpdate.rows[0].user_name,
      after: result.rows[0].user_name,
    });
  } catch (error) {
    res.status(200).json({
      success: "Can't update a user that doesn't exists",
    });
  }
});

router.get("/uniqueUserName", async (req, res, next) => {
  try {
    const sameUserName = await pool.query(
      `
      INSERT INTO users(user_name, email, password, gender, dni)
      VALUES(
        'Antonio Corbalán Navarro',
        'antoniocn1996@gmail.com',
        'admin1',
        'male',
        '11111F') RETURNING *;
    `
    );
    res.status(200).json({
      message: sameUserName,
    });
  } catch (error) {
    res.json({
      success: "Can't insert user with same user_name",
      proof: error.detail,
    });
  }
});

router.get("/uniqueEmail", async (req, res, next) => {
  try {
    const sameEmail = await pool.query(
      `
      INSERT INTO users(user_name, email, password, gender, dni)
      VALUES(
        'Nuevo',
        'antoniocn1996@gmail.com',
        'admin1',
        'male',
        'nuevo') RETURNING *;
    `
    );
    res.status(200).json({
      message: sameEmail,
    });
  } catch (error) {
    res.json({
      success: "Can't insert user with same email",
      proof: error.detail,
    });
  }
});

router.get("/uniqueDni", async (req, res, next) => {
  try {
    const sameDni = await pool.query(
      `
      INSERT INTO users(user_name, email, password, gender, dni)
      VALUES(
        'Nuevo',
        'nuevo@gmail.com',
        'admin1',
        'male',
        '111111F') RETURNING *;
    `
    );
    res.status(200).json({
      message: sameDni.rows[0],
    });
  } catch (error) {
    res.json({
      success: "Can't insert user with same dni",
      proof: error.detail,
    });
  }
});

router.get("/passwordRequired", async (req, res, next) => {
  try {
    const passwordRequired = await pool.query(
      `
      INSERT INTO users(user_name, email, password)
      VALUES(
        'user1',
        'user1@gmail.com',
        $1) RETURNING *;
    `,
      [null]
    );
    res.status(200).json({
      error: "DB schema have vulnerabilities",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/emailRequired", async (req, res, next) => {
  try {
    const emailRequired = await pool.query(
      `
      INSERT INTO users(user_name, email, password)
      VALUES(
        'user1',
        $1,
        'password'
        ) RETURNING *;
    `,
      [null]
    );
    res.status(200).json({
      error: "DB schema have vulnerabilities",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/usernameRequired", async (req, res, next) => {
  try {
    const usernameRequired = await pool.query(
      `
      INSERT INTO users(user_name, email, password)
      VALUES(
        $1,
        'user@gmail.com',
        'password'
        ) RETURNING *;
    `,
      [null]
    );
    res.status(200).json({
      error: "DB schema have vulnerabilities",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/userNameMaxLenght", async (req, res, next) => {
  try {
    const result = await pool.query(
      `
      UPDATE
        users
      SET
        user_name = 'nombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombrenombre'
      WHERE
        user_id = 1 RETURNING *;
      `
    );
    res.status(200).json({
      error: "DB schema have vulnerabilities",
      result: result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/emailMaxLenght", async (req, res, next) => {
  try {
    const result = await pool.query(
      `
      UPDATE
        users
      SET
        email = 'emailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemailemail'
      WHERE
        user_id = 1 RETURNING *;
      `
    );
    res.status(200).json({
      error: "DB schema have vulnerabilities",
      result: result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/dniMaxLenght", async (req, res, next) => {
  try {
    const result = await pool.query(
      `
      UPDATE
        users
      SET
        dni = 'aaaaaaaaa11'
      WHERE
        user_id = 1 RETURNING *;
      `
    );
    res.status(200).json({
      error: "DB schema have vulnerabilities",
      result: result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/passwordMaxLenght", async (req, res, next) => {
  try {
    const result = await pool.query(
      `
      UPDATE
        users
      SET
        password = 'aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11aaaaaaaaa11'
      WHERE
        user_id = 1 RETURNING *;
      `
    );
    res.status(200).json({
      error: "DB schema have vulnerabilities",
      result: result,
    });
  } catch (error) {
    next(error);
  }
});

router.get("/usersTypeConstraint1", async (req, res, next) => {
  try {
    const result = await pool.query(
      `
      UPDATE
        users
      SET
        user_name = $1,
        email = $1,
        password = $1,
        dni = $1
      WHERE
        user_id = 1 RETURNING *;
      `,
      [1]
    );
    res.status(200).json({
      success: "Parsing type NUMERIC to VARCHAR",
      result: {
        user_name: result.rows[0].user_name,
        email: result.rows[0].email,
        password: result.rows[0].password,
        dni: result.rows[0].dni,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/usersTypeConstraint2", async (req, res, next) => {
  try {
    const result = await pool.query(
      `
      UPDATE
        users
      SET
        user_name = $1,
        email = $1,
        password = $1,
        dni = $1
      WHERE
        user_id = 1 RETURNING *;
      `,
      [true]
    );
    res.status(200).json({
      success: "Parsing type BOOLEAN to VARCHAR",
      result: {
        user_name: result.rows[0].user_name,
        email: result.rows[0].email,
        password: result.rows[0].password,
        dni: result.rows[0].dni,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/usersTypeConstraint3", async (req, res, next) => {
  try {
    const result = await pool.query(
      `
      UPDATE
        users
      SET
        user_name = $1,
        email = $1,
        password = $1
      WHERE
        user_id = 1 RETURNING *;
      `,
      [new Date()]
    );
    res.status(200).json({
      success: "Parsing type DATE to VARCHAR",
      result: {
        user_name: result.rows[0].user_name,
        email: result.rows[0].email,
        password: result.rows[0].password,
        dni: result.rows[0].dni,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/enumConstraint", async (req, res, next) => {
  try {
    const result = await pool.query(
      `
      UPDATE
        users
      SET
        gender = $1
      WHERE
        user_id = 1 RETURNING *;
      `,
      ["otro tipo"]
    );
    res.status(200).json({
      success: "Parsing type DATE to VARCHAR",
      result: {
        user_name: result.rows[0].user_name,
        email: result.rows[0].email,
        password: result.rows[0].password,
        dni: result.rows[0].dni,
      },
    });
  } catch (error) {
    next(error);
  }
});

export default router;