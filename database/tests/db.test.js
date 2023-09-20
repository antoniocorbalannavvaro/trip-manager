import { Router } from "express";
import pool from "../../src/db.js";
import { testDB } from "./libs/testDB.js";

const router = Router();

router.get("/dropDB", async (req, res, next) => {
  await testDB(
    res,
    next,
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
      `,
    [],
    "Delete tables"
  );
});

router.get("/createTables", async (req, res, next) => {
  await testDB(
    res,
    next,
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
      dni VARCHAR(15) NULL UNIQUE,
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
      CONSTRAINT fk_user_id FOREIGN KEY(user_id) REFERENCES users(user_id) ON DELETE CASCADE
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
      CONSTRAINT fk_customer_id FOREIGN KEY(customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
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
      CONSTRAINT fk_trip_id FOREIGN KEY(trip_id) REFERENCES trips(trip_id) ON DELETE CASCADE
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
      CONSTRAINT fk_trip_id FOREIGN KEY(trip_id) REFERENCES trips(trip_id) ON DELETE CASCADE
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
      CONSTRAINT fk_trip_id FOREIGN KEY(trip_id) REFERENCES trips(trip_id) ON DELETE CASCADE
    );
    
    CREATE TRIGGER set_timestamp BEFORE
    UPDATE
    ON activities FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
    `,
    [],
    "Create tables"
  );
});

export default router;
