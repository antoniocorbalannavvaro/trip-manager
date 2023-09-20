import { Router } from "express";
import pool from "../../../src/db.js";

const router = Router();

router.get("/cleanDB", async (req, res, next) => {
  try {
    const result = await pool.query(
      `DROP TABLE IF EXISTS activities;
      DROP TABLE IF EXISTS transportation;
      DROP TABLE IF EXISTS host;
      DROP TABLE IF EXISTS trips;
      DROP TABLE IF EXISTS customers;
      DROP TABLE IF EXISTS users;
      DROP TYPE IF EXISTS gender_enum;
      DROP TYPE IF EXISTS trip_state_enum;
      DROP TYPE IF EXISTS host_type_enum;
      DROP TYPE IF EXISTS transport_type_enum;
      `
    );

    res.status(200).json({
      success: "Delete All tables",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/createTables", async (req, res, next) => {
  try {
    const result = await pool.query(
      `
CREATE OR REPLACE FUNCTION trigger_set_timestamp() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = NOW();
RETURN NEW;
END;

$$ LANGUAGE plpgsql;

CREATE TYPE gender_enum AS ENUM ('male', 'female', 'others');

CREATE TYPE trip_state_enum AS ENUM ('finalized', 'Not started', 'ongoing');

CREATE TYPE host_type_enum AS ENUM (
  'hotel',
  'hostel',
  'business hotel',
  'capsule hotel',
  'bed & breadkfast',
  'pension',
  'rural house',
  'rustic hostel',
  'camping',
  'glamping',
  'resort',
  'motel'
);

CREATE TYPE transport_type_enum AS ENUM (
  'long-distance train',
  'short-distance train',
  'long-distance bus',
  'short-distance bus',
  'metro',
  'taxi',
  'vtc',
  'ship',
  'boat',
  'plane',
  'trolley car',
  'cableway',
  'private jet'
);

CREATE TABLE IF NOT EXISTS users(
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(50) NOT NULL,
  gender gender_enum NULL,
  dni VARCHAR(10) NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TRIGGER set_timestamp BEFORE
UPDATE
  ON users FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

-- CUSTOMERS:
CREATE TABLE IF NOT EXISTS customers (
  customer_id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  first_name VARCHAR(50) NULL,
  last_name VARCHAR(100) NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  dni VARCHAR(20) NULL UNIQUE,
  phone_prefix VARCHAR(3) NULL,
  phone VARCHAR(20) NULL UNIQUE,
  gender gender_enum NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TRIGGER set_timestamp BEFORE
UPDATE
  ON customers FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

-- TRIPS:
CREATE TABLE IF NOT EXISTS trips (
  trip_id SERIAL,
  customer_id INT NOT NULL,
  description VARCHAR(255) NULL,
  state trip_state_enum NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY(trip_id),
  CONSTRAINT fk_customer_id FOREIGN KEY(customer_id) REFERENCES customers(customer_id)
);

CREATE TRIGGER set_timestamp BEFORE
UPDATE
  ON trips FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

-- HOST:
CREATE TABLE IF NOT EXISTS host(
  host_id SERIAL PRIMARY KEY,
  trip_id INT NOT NULL,
  host_type host_type_enum NULL,
  host_name VARCHAR(50) NULL,
  host_country VARCHAR(50) NULL,
  host_city VARCHAR(50) NULL,
  host_address VARCHAR(200) NULL,
  room_num VARCHAR(50) NULL,
  date_from TIMESTAMP NULL,
  date_to TIMESTAMP NULL,
  price NUMERIC(10, 2) NULL,
  commission NUMERIC(4, 2) NULL,
  amount_payed NUMERIC(10,2) NULL,
  additional_info VARCHAR(500) NULL,
  receipt BYTEA NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT fk_trip_id FOREIGN KEY(trip_id) REFERENCES trips(trip_id)
);

CREATE TRIGGER set_timestamp BEFORE
UPDATE
  ON host FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

-- TRANSPORTATION:
CREATE TABLE IF NOT EXISTS transportation(
  transportation_id SERIAL PRIMARY KEY,
  trip_id INT NOT NULL,
  transportation_type transport_type_enum NULL,
  company VARCHAR(100) NULL,
  date_from TIMESTAMP NULL,
  date_to TIMESTAMP NULL,
  location_from VARCHAR(100) NULL,
  location_to VARCHAR(100) NULL,
  seat VARCHAR (50) NULL,
  price NUMERIC(10, 2) NULL,
  commission NUMERIC(4, 2) NULL,
  amount_payed NUMERIC(10,2) NULL,
  additional_info VARCHAR(500) NULL,
  receipt BYTEA NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT fk_trip_id FOREIGN KEY(trip_id) REFERENCES trips(trip_id)
);

CREATE TRIGGER set_timestamp BEFORE
UPDATE
  ON transportation FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();

-- ACTIVITIES:
CREATE TABLE IF NOT EXISTS activities(
  activity_id SERIAL PRIMARY KEY,
  trip_id INT NOT NULL,
  activity_description VARCHAR(500) NULL,
  company VARCHAR(100) NULL,
  date_from TIMESTAMP NULL,
  date_to TIMESTAMP NULL,
  activitiy_location VARCHAR(100) NULL,
  price NUMERIC(10, 2) NULL,
  commission NUMERIC(4, 2) NULL,
  amount_payed NUMERIC(10,2) NULL,
  additional_info VARCHAR(255) NULL,
  receipt BYTEA NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT fk_trip_id FOREIGN KEY(trip_id) REFERENCES trips(trip_id)
);

CREATE TRIGGER set_timestamp BEFORE
UPDATE
ON activities FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();`
    );

    res.status(200).json({
      success: "Create tables",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/insertData", async (req, res, next) => {
  try {
    const result = await pool.query(
      `
      SELECT
      *
    FROM
      customers;
    
    INSERT INTO
      users(user_name, email, password, gender, dni)
    VALUES
      (
        'Antonio Corbalán Navarro',
        'antoniocn1996@gmail.com',
        'admin1',
        'male',
        '12121212D'
      );
    
    INSERT INTO
      users(user_name, email, password, gender, dni)
    VALUES
      (
        'Ignacio Nieto Iniesta',
        'ignacio@gmail.com',
        'admin2',
        'male',
        '12121212E'
      );
    
    UPDATE
      users
    SET
      dni = '12121212W'
    WHERE
      user_id = 1;
    
    INSERT INTO
      customers(
        user_id,
        first_name,
        last_name,
        email,
        dni,
        phone_prefix,
        phone,
        gender
      )
    VALUES
      (
        1,
        'Pepe',
        'Pérez Sánchez',
        'pepe@gmail.com',
        '43546576F',
        '+34',
        634567690,
        'male'
      );
    
    INSERT INTO
      customers(
        user_id,
        first_name,
        last_name,
        email,
        dni,
        phone_prefix,
        phone,
        gender
      )
    VALUES
      (
        2,
        'Marta',
        'González Ruiz',
        'marta@gmail.com',
        '41324354D',
        '+13',
        5552334,
        'female'
      );
    
    UPDATE
      customers
    SET
      phone_prefix = '+34'
    WHERE
      user_id = 2;
    
    INSERT INTO
      trips(customer_id, description, state)
    VALUES
      (1, 'Viaje a italia', 'ongoing');
    
    INSERT INTO
      trips(customer_id, description, state)
    VALUES
      (2, 'Viaje a Alemania', 'Not started');
    
    UPDATE
      trips
    SET
      description = 'Viaje a París'
    WHERE
      trip_id = 1;
    
    INSERT INTO
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
        additional_info
      )
    VALUES
      (
        1,
        'hotel',
        'Hotel Berlin',
        'Alemania',
        'Berlin',
        'Calle de Berlin nº19',
        'Habitacion 303B',
        '2023-01-01 13:50:00',
        '2023-02-10 08:20:00',
        239.99,
        3.00,
        'Informacion adicional'
      );
    
    INSERT INTO
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
        additional_info
      )
    VALUES
      (
        2,
        'bed & breadkfast',
        'Come and go house',
        'France',
        'Paris',
        'Calle Paris nº3',
        'Habitacion 8-Y',
        '2023-09-20 09:00:00',
        '2023-09-21 09:25:00',
        25.00,
        1.00,
        'Informacion adicional'
      );
    UPDATE
      host
    SET
      host_address = 'Avenida de Paris nº3'
    WHERE
      trip_id = 2;
    
    INSERT INTO activities(
      trip_id,
      activity_description,
      company,
      date_from,
      date_to,
      activitiy_location,
      price,
      commission,
      receipt,
      additional_info)
    VALUES 
    (1, 'Visita torre eifel', 'Paris company', '2023-01-01 10:00', '2023-01-01 10:01', 'La torre eifel', 50.00, 1.00, '', 'additional_info');
    
    INSERT INTO activities(
      trip_id,
      activity_description,
      company,
      date_from,
      date_to,
      activitiy_location,
      price,
      commission,
      receipt,
      additional_info)
    VALUES 
    (2, 'Paseo por el rio', 'Company 1', '2023-01-01 10:00', '2023-01-01 10:01', 'rio', 10.00, 1.00, '', 'additional_info');
    
    insert into transportation(
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
      receipt
    )
    VALUES (1, 'private jet', 'flyMe 2 the moon' ,'2023-01-01 10:00', '2023-01-01 10:01', 'Alberca', 'Ontario', '1-A', 1000.50, 2, 'info 1','');
    
    INSERT INTO transportation(
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
      receipt
    )
    VALUES (2, 'taxi', 'Taxis Company' ,'2023-01-01 10:00', '2023-01-01 10:01', 'Partida', 'Destino', '', 30, 9, 'info 1','');
    
    INSERT INTO transportation(
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
      receipt
    )
    VALUES (2, 'boat', 'SEA TRIP SL' ,'2023-02-01 10:00', '2023-02-01 10:01', 'Murcia', 'Albacete', '4B', 30000, 90.00, 'barco','');
    
`
    );

    res.status(200).json({
      success: "Insert data",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
