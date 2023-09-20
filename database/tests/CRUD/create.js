import { Router } from "express";
import { testDB } from "../libs/testDB.js";

const router = Router();

router.get("/userRegister", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO users(user_name, email, password, gender, dni) 
    VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    ["Antonio Corbalan", "antonio@gmail.com", "1234", "male", "123456789"],
    "USER CREATED"
  );
});

router.get("/createCustomer", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO customers(user_id, first_name, last_name, email, dni, phone_prefix, phone, gender)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
    [
      1,
      "customer",
      "1",
      "customer1@gamil.com",
      "44332211F",
      "+34",
      "643546586",
      "female",
    ],
    "CUSTOMER CREATED"
  );
});

router.get("/createTrip", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO trips(customer_id, description, state) 
    VALUES ($1, $2, $3) RETURNING *`,
    [1, "Viaje a Murcia", "ongoing"],
    "TRIP CREATED"
  );
});

router.get("/createHost", async (req, res, next) => {
  await testDB(
    res,
    next,
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
      receipt,
      amount_payed
      )
      VALUES($1, $2, $3, $4, $5, $6 ,$7, $8, $9, $10, $11, $12, $13, $14)
      RETURNING *;`,
    [
      1,
      "hotel",
      "Hotel Nelva",
      "España",
      "Murcia",
      "Calle Nelva nº3",
      "101B",
      "2023-01-01 13:00:00",
      "2023-01-09 09:00:00",
      295.99,
      12.55,
      "El desayuno no está incluido",
      "",
      0,
    ],
    "HOST CREATED"
  );
});

router.get("/createTransportation1", async (req, res, next) => {
  await testDB(
    res,
    next,
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
      receipt,
      amount_payed
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING *`,
    [
      1,
      "plane",
      "Iberia",
      "2023-01-01 06:00:00",
      "2023-01-01 08:00:00",
      "Aeropuerto de Madrid, Madrid",
      "Aeropuerto de Corvera, Murcia",
      "32C",
      120.99,
      12,
      "Puerta de embarque 7A, hay que estar 2 horas antes de que el vuelo salga",
      "TRANSPORTATION 1",
      0.99,
    ],
    "TRANSPORTATION 1 CREATED"
  );
});

router.get("/createTransportation2", async (req, res, next) => {
  await testDB(
    res,
    next,
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
      receipt,
      amount_payed
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
    RETURNING *`,
    [
      1,
      "long-distance bus",
      "ALSA",
      "2023-01-01 08:30:00",
      "2023-01-01 12:00:00",
      "Aeropuerto de Corvera, Murcia",
      "HOTEL NELVA Calle Nelva nº3, Murcia",
      "10B",
      25,
      5,
      "Hay que facturar las maletas grandes",
      "TRANSPORTATION 2",
      20,
    ],
    "TRANSPORTATION 2 CREATED"
  );
});

router.get("/createActivity1", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO activities(
      trip_id, 
      activity_description, 
      company, 
      date_from, 
      date_to, 
      activitiy_location, 
      price, 
      commission, 
      receipt,
      additional_info,
      amount_payed
      ) 
      VALUES($1 ,$2 ,$3 ,$4 ,$5 ,$6 ,$7 ,$8 ,$9, $10, $11) RETURNING *`,
    [
      1,
      "Visita al museo",
      "Ayuntamiento de Murcia",
      "2023-01-01 17:30:00",
      "2023-01-01 20:00:00",
      "San Andrés nº2, Museo Salzillo",
      50,
      10,
      "",
      "Estar media hora antes para no hacer cola.",
      50,
    ],
    "ACTIVITY 1 CREATED"
  );
});

router.get("/createActivity2", async (req, res, next) => {
  await testDB(
    res,
    next,
    `INSERT INTO activities(
      trip_id, 
      activity_description, 
      company, 
      date_from, 
      date_to, 
      activitiy_location, 
      price, 
      commission, 
      receipt,
      additional_info,
      amount_payed
      ) 
      VALUES($1 ,$2 ,$3 ,$4 ,$5 ,$6 ,$7 ,$8 ,$9, $10, $11) RETURNING *`,
    [
      1,
      "Submarinismo en el rio segura",
      "AquaCompany",
      "2023-01-02 9:30:00",
      "2023-01-02 11:00:00",
      "Puerta del Auditorio Victor Villegas, justo a parada de bús",
      170,
      2,
      "",
      "Hay que llevar aletas, ahí no tienen",
      70,
    ],
    "ACTIVITY 2 CREATED"
  );
});

router.get("/getInvoice", async (req, res, next) => {
  await testDB(
    res,
    next,
    `
    SELECT 
    CAST(h.host_type AS VARCHAR(100)) ,
    h.price,
    h.amount_payed,
    (h.price - h.amount_payed) AS pending_to_pay,
    h.commission AS commission_percentage,
    ROUND((h.price * h.commission / 100),2) AS agent_amount_commission
  FROM host h 
  WHERE h.trip_id = 1 
  UNION ALL 
  SELECT 
    CAST(t.transportation_type AS VARCHAR(100)),
    t.price,
    t.amount_payed,
    (t.price - t.amount_payed) AS pending_to_pay,
    t.commission AS commission_percentage,
    ROUND((t.price * t.commission / 100),2) AS agent_amount_commission
  FROM transportation t WHERE t.trip_id = 1
  UNION ALL 
  SELECT 
    CAST(a.activity_description AS VARCHAR(100)),
    a.price,
    a.amount_payed,
    (a.price - a.amount_payed) AS pending_to_pay,
    a.commission AS commission_percentage,
    ROUND((a.price * a.commission / 100),2) AS agent_amount_commission
  FROM activities a WHERE a.trip_id = 1;
    `,
    [],
    "GET INVOICE"
  );
});

router.get("/getInvoiceAmount", async (req, res, next) => {
  await testDB(
    res,
    next,
    `

    SELECT SUM(price) FROM (SELECT 
      CAST(h.host_type AS VARCHAR(100)) ,
      h.price,
      h.amount_payed,
      (h.price - h.amount_payed) AS pending_to_pay,
      h.commission AS commission_percentage,
      ROUND((h.price * h.commission / 100),2) AS agent_amount_commission
    FROM host h 
    WHERE h.trip_id = 1 
    UNION ALL 
    SELECT 
      CAST(t.transportation_type AS VARCHAR(100)),
      t.price,
      t.amount_payed,
      (t.price - t.amount_payed) AS pending_to_pay,
      t.commission AS commission_percentage,
      ROUND((t.price * t.commission / 100),2) AS agent_amount_commission
    FROM transportation t WHERE t.trip_id = 1
    UNION ALL 
    SELECT 
      CAST(a.activity_description AS VARCHAR(100)),
      a.price,
      a.amount_payed,
      (a.price - a.amount_payed) AS pending_to_pay,
      a.commission AS commission_percentage,
      ROUND((a.price * a.commission / 100),2) AS agent_amount_commission
    FROM activities a WHERE a.trip_id = 1) AS price;
    
    `,
    [],
    "GET INVOICE AMOUNT"
  );
});

router.get("/getAmountPending", async (req, res, next) => {
  await testDB(
    res,
    next,
    `
    SELECT SUM(pending_to_pay) FROM (SELECT 
      CAST(h.host_type AS VARCHAR(100)) ,
      h.price,
      h.amount_payed,
      (h.price - h.amount_payed) AS pending_to_pay,
      h.commission AS commission_percentage,
      ROUND((h.price * h.commission / 100),2) AS agent_amount_commission
    FROM host h 
    WHERE h.trip_id = 1 
    UNION ALL 
    SELECT 
      CAST(t.transportation_type AS VARCHAR(100)),
      t.price,
      t.amount_payed,
      (t.price - t.amount_payed) AS pending_to_pay,
      t.commission AS commission_percentage,
      ROUND((t.price * t.commission / 100),2) AS agent_amount_commission
    FROM transportation t WHERE t.trip_id = 1
    UNION ALL 
    SELECT 
      CAST(a.activity_description AS VARCHAR(100)),
      a.price,
      a.amount_payed,
      (a.price - a.amount_payed) AS pending_to_pay,
      a.commission AS commission_percentage,
      ROUND((a.price * a.commission / 100),2) AS agent_amount_commission
    FROM activities a WHERE a.trip_id = 1) AS pending_to_pay;
    
    
    `,
    [],
    "AMOUNT PENDING"
  );
});

router.get("/getCommissionAmount", async (req, res, next) => {
  await testDB(
    res,
    next,
    `
    SELECT SUM(agent_amount_commission) FROM (SELECT 
      CAST(h.host_type AS VARCHAR(100)) ,
      h.price,
      h.amount_payed,
      (h.price - h.amount_payed) AS pending_to_pay,
      h.commission AS commission_percentage,
      ROUND((h.price * h.commission / 100),2) AS agent_amount_commission
    FROM host h 
    WHERE h.trip_id = 1 
    UNION ALL 
    SELECT 
      CAST(t.transportation_type AS VARCHAR(100)),
      t.price,
      t.amount_payed,
      (t.price - t.amount_payed) AS pending_to_pay,
      t.commission AS commission_percentage,
      ROUND((t.price * t.commission / 100),2) AS agent_amount_commission
    FROM transportation t WHERE t.trip_id = 1
    UNION ALL 
    SELECT 
      CAST(a.activity_description AS VARCHAR(100)),
      a.price,
      a.amount_payed,
      (a.price - a.amount_payed) AS pending_to_pay,
      a.commission AS commission_percentage,
      ROUND((a.price * a.commission / 100),2) AS agent_amount_commission
    FROM activities a WHERE a.trip_id = 1) AS agent_amount_commission;
    
    
    `,
    [],
    "GET COMMISSION AMOUNT"
  );
});

export default router;
