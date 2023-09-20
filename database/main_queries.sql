-- Que customers tiene cada usuario:
SELECT
	u.user_id,
	u.user_name AS CREATOR,
	cu.first_name AS CUSTOMER
FROM
	customers cu
	INNER JOIN users u ON cu.user_id = u.user_id;

-- Que customers tiene un usuario:
SELECT
	u.user_id,
	u.user_name AS CREATOR,
	cu.first_name AS CUSTOMER
FROM
	customers cu
	INNER JOIN users u ON cu.user_id = u.user_id
WHERE
	u.user_id = 1;

-- Que viajes tiene cada customer:
SELECT
	c.customer_id,
	c.first_name,
	t.trip_id,
	t.description
FROM
	trips t
	INNER JOIN customers c ON t.customer_id = c.customer_id;

-- A que viaje y customer pertenece un host:
SELECT
	t.trip_id,
	c.customer_id,
	c.first_name,
	t.description,
	h.host_name,
	h.price
FROM
	host h
	INNER JOIN trips t ON h.trip_id = t.trip_id
	INNER JOIN customers c ON t.customer_id = c.customer_id
	INNER JOIN users u ON c.user_id = u.user_id;

-- A que viaje y customer pertenece un transportation:
SELECT
	t.trip_id,
	c.customer_id,
	c.first_name,
	t.description,
	tra.company,
	tra.price
FROM
	transportation tra
	INNER JOIN trips t ON tra.trip_id = t.trip_id
	INNER JOIN customers C ON t.customer_id = C.customer_id
	INNER JOIN users u ON C.user_id = u.user_id;

-- A que viaje y customer (y quien ha creado el customer) pertenece una activity:
SELECT
	t.trip_id,
	c.customer_id,
	c.first_name,
	t.description,
	a.activity_description,
	A.price
FROM
	activities a
	INNER JOIN trips t ON A.trip_id = t.trip_id
	INNER JOIN customers c ON t.customer_id = c.customer_id
	INNER JOIN users u ON c.user_id = u.user_id;

-- Sacar historial de un viaje;
SELECT 
	CAST(h.host_type AS VARCHAR(100)) ,
	h.price
FROM host h 
WHERE h.trip_id = 1 
UNION ALL 
SELECT 
	CAST(t.transportation_type AS VARCHAR(100)),
	t.price
FROM transportation t WHERE t.trip_id = 1
UNION ALL 
SELECT 
	CAST(a.activity_description AS VARCHAR(100)),
	a.price
FROM activities a WHERE a.trip_id = 1

-- Deglose del viaje, precio de cada cosa, porcentaje de comision y comision en € para el agente de viajes:
SELECT 
	h.trip_id,
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
	t.trip_id,
	CAST(t.transportation_type AS VARCHAR(100)),
	t.price,
	t.amount_payed,
	(t.price - t.amount_payed) AS pending_to_pay,
	t.commission AS commission_percentage,
	ROUND((t.price * t.commission / 100),2) AS agent_amount_commission
FROM transportation t WHERE t.trip_id = 1
UNION ALL 
SELECT 
	a.trip_id,
	CAST(a.activity_description AS VARCHAR(100)),
	a.price,
	a.amount_payed,
	(a.price - a.amount_payed) AS pending_to_pay,
	a.commission AS commission_percentage,
	ROUND((a.price * a.commission / 100),2) AS agent_amount_commission
FROM activities a WHERE a.trip_id = 1;

-- Total en € de la comision que se lleva un agente por un viaje:
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


-- PRECIO TOTAL SIN CONTAR LO PAGADO:
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

 -- Calcular precio total de un viaje CONTANDO LO QUE YA SE HA PAGADO:
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
