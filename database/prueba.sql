    CREATE OR REPLACE FUNCTION trigger_set_timestamp() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = NOW();
    RETURN NEW;
    END;
    
    $$ LANGUAGE plpgsql;
  
    CREATE TABLE IF NOT EXISTS users(
      user_id SERIAL PRIMARY KEY,
      user_name TEXT,
      email TEXT,
      password TEXT,
      gender TEXT,
      dni TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    
    CREATE TRIGGER set_timestamp BEFORE
    UPDATE
      ON users FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
    
    -- CUSTOMERS:
    CREATE TABLE IF NOT EXISTS customers (
      customer_id SERIAL PRIMARY KEY,
      user_id TEXT,
      first_name TEXT,
      last_name TEXT,
      email TEXT,
      dni TEXT,
      phone_prefix TEXT,
      phone TEXT,
      gender TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    
    CREATE TRIGGER set_timestamp BEFORE
    UPDATE
      ON customers FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
    
    -- TRIPS:
    CREATE TABLE IF NOT EXISTS trips (
      trip_id SERIAL,
      customer_id TEXT,
      description TEXT,
      state TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      PRIMARY KEY(trip_id)
    );
    
    CREATE TRIGGER set_timestamp BEFORE
    UPDATE
      ON trips FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
    
    -- HOST:
    CREATE TABLE IF NOT EXISTS host(
      host_id SERIAL PRIMARY KEY,
      trip_id TEXT,
      host_type TEXT,
      host_name TEXT,
      host_country TEXT,
      host_city TEXT,
      host_address TEXT,
      room_num TEXT,
      date_from TEXT,
      date_to TEXT,
      price NUMERIC(50, 4),
      commission NUMERIC(50, 4),
      amount_payed NUMERIC(50, 4),
      additional_info TEXT,
      receipt TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    
    CREATE TRIGGER set_timestamp BEFORE
    UPDATE
      ON host FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
    
    -- TRANSPORTATION:
    CREATE TABLE IF NOT EXISTS transportation(
      transportation_id SERIAL PRIMARY KEY,
      trip_id TEXT,
      transportation_type TEXT,
      company TEXT,
      date_from TEXT,
      date_to TEXT,
      location_from TEXT,
      location_to TEXT,
      seat TEXT,
      price NUMERIC(50, 4),
      commission NUMERIC(50, 4),
      amount_payed NUMERIC(50, 4),
      additional_info TEXT,
      receipt TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    
    CREATE TRIGGER set_timestamp BEFORE
    UPDATE
      ON transportation FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();
    
    -- ACTIVITIES:
    CREATE TABLE IF NOT EXISTS activities(
      activity_id SERIAL PRIMARY KEY,
      trip_id TEXT,
      activity_description TEXT,
      company TEXT,
      date_from TEXT,
      date_to TEXT,
      activitiy_location TEXT,
      price NUMERIC(50, 4),
      commission NUMERIC(50, 4),
      amount_payed NUMERIC(50, 4),
      additional_info TEXT,
      receipt TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    
    CREATE TRIGGER set_timestamp BEFORE
    UPDATE
    ON activities FOR EACH ROW EXECUTE PROCEDURE trigger_set_timestamp();