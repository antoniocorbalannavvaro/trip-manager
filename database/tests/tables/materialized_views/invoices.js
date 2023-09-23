// import { Router } from "express";
// import { testDB } from "../libs/testDB.js";

// const router = Router();

// router.get("/createInovicesMaterializedView", async (req, res, next) => {
//   await testDB(
//     res,
//     next,
//     `CREATE MATERIALIZED VIEW IF NOT EXISTS invoices AS
//     SELECT
//     	t.trip_id AS id_viaje,
//     	c.user_id AS id_usuario,
//     	c.first_name AS nombre,
//     	c.last_name AS apellidos,
//     	c.email,
//     	c.dni,
//     	c.phone_prefix AS prefijo_telefónico,
//     	c.phone AS numero_de_teléfono,
//     	c.gender AS género,
//     	t.description AS viaje,
//     	h.host_type AS tipo_de_hospedaje,
//     	h.host_name AS nombre_del_hospedaje,
//     	h.price AS precio,
//     	h.amount_payed AS pagado,
//     	(h.price - h.amount_payed) AS pendiente_de_pago,
//     	h.commission AS porcentaje_comision_agente,
//     	ROUND((h.price * h.commission / 100),2) AS total_comision_agente
//     FROM host h
//     INNER JOIN trips t ON h.trip_id = t.trip_id
//     INNER JOIN customers c ON t.customer_id = c.customer_id
//     WITH DATA;`,
//     [],
//     ""
//   );
// });

// export default router;
