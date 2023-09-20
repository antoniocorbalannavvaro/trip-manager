import { Router } from "express";
import { testDB } from "../libs/testDB.js";

const router = Router();

router.get("/postData", async (req, res, next) => {
  await testDB(
    res,
    next,
    `
    INSERT INTO users(user_name, email, password, gender, dni)
    VALUES('Antonio Corbalán Navarro','antoniocn1996@gmail.com','admin1','male','12121212D');

    -- CUSTOMER 1:
    INSERT INTO customers(user_id, first_name, last_name, email, dni, phone_prefix, phone, gender)
    VALUES (1, 'Pepe', 'Pepe Pepe', 'pepe@gmail.com', '123456', '+34', 634567690, 'male' );

    INSERT INTO trips(customer_id, description, state)
    VALUES (1, 'Viaje a italia', 'finalized');

    INSERT INTO trips(customer_id, description, state)
    VALUES (1, 'Viaje a Francia', 'ongoing');

    INSERT INTO host(trip_id, host_type, host_name, host_country, host_city, host_address, room_num, date_from, date_to, price, commission, additional_info, amount_payed ) 
    VALUES (1, 'hotel', 'Hotel italia', 'italia', 'italia', 'Calle de italia nº19', 'Habitacion 303B', '2023-01-01 13:50:00', '2023-02-10 08:20:00', 29.99, 3.00, 'Informacion adicional', 20 );

    INSERT INTO host( trip_id, host_type, host_name, host_country, host_city, host_address, room_num, date_from, date_to, price, commission, additional_info, amount_payed ) 
    VALUES (1, 'bed & breadkfast', 'Come and go house', 'italia', 'italia', 'Calle italia nº3', 'Habitacion 8-Y', '2023-09-20 09:00:00', '2023-09-21 09:25:00', 250.00, 1.00, 'Informacion adicional', 0 );
    
    INSERT INTO host(trip_id, host_type, host_name, host_country, host_city, host_address, room_num, date_from, date_to, price, commission, additional_info, amount_payed ) 
    VALUES (2, 'resort', 'resort Francia', 'Francia', 'Francia', 'Calle de Francia nº19', 'Habitacion 303B', '2023-01-01 13:50:00', '2023-02-10 08:20:00', 100.99, 3.00, 'Informacion adicional', 0 );

    INSERT INTO host( trip_id, host_type, host_name, host_country, host_city, host_address, room_num, date_from, date_to, price, commission, additional_info, amount_payed ) 
    VALUES (2, 'rustic hostel', 'rustic and house ', 'France', 'Paris', 'Calle Paris nº3', 'Habitacion 8-Y', '2023-09-20 09:00:00', '2023-09-21 09:25:00', 80.00, 1.00, 'Informacion adicional', 40 );

    INSERT INTO activities(trip_id, activity_description, company, date_from, date_to, activitiy_location, price, commission, receipt, additional_info, amount_payed) 
    VALUES (1, 'Visita torre pizza', 'italia company', '2023-01-01 10:00', '2023-01-01 10:01', 'La torre italia', 90.00, 2.00, '', 'additional_info', 80); 
    
    INSERT INTO activities(trip_id, activity_description, company, date_from, date_to, activitiy_location, price, commission, receipt, additional_info, amount_payed) 
    VALUES (1, 'Paseo por el rio', 'italian river', '2023-01-01 10:00', '2023-01-01 10:01', 'rio', 30.00, 9.00, '', 'additional_info',29);
    
    INSERT INTO activities(trip_id, activity_description, company, date_from, date_to, activitiy_location, price, commission, receipt, additional_info, amount_payed) 
    VALUES (2, 'Visita torre eifel', 'Paris company', '2023-01-01 10:00', '2023-01-01 10:01', 'La torre eifel', 50.00, 1.00, '', 'additional_info', 23); 
    
    INSERT INTO activities(trip_id, activity_description, company, date_from, date_to, activitiy_location, price, commission, receipt, additional_info, amount_payed) 
    VALUES (2, 'Paseo Parque', 'Company 1', '2023-01-01 10:00', '2023-01-01 10:01', 'Parque', 10.00, 1.00, '', 'additional_info', 1);

    INSERT INTO transportation(trip_id, transportation_type, company, date_from, date_to, location_from, location_to, seat, price, commission, additional_info, receipt, amount_payed ) 
    VALUES (1, 'private jet', 'flyMe 2 the moon' ,'2023-01-01 10:00', '2023-01-01 10:01', 'Alberca', 'Ontario', '1-A', 1000.50, 2, 'info 1','', 200); 
    
    INSERT INTO transportation(trip_id, transportation_type, company, date_from, date_to, location_from, location_to, seat, price, commission, additional_info, receipt, amount_payed ) 
    VALUES (1, 'taxi', 'Taxis Company' ,'2023-01-01 10:00', '2023-01-01 10:01', 'Partida', 'Destino', '', 30, 9, 'info 1','', 20);
    
    INSERT INTO transportation(trip_id, transportation_type, company, date_from, date_to, location_from, location_to, seat, price, commission, additional_info, receipt, amount_payed ) 
    VALUES (2, 'long-distance bus', 'ALSA' ,'2023-01-01 10:00', '2023-01-01 10:01', 'Murcia', 'Sevilla', '1-A', 1000.50, 2, 'info 1','', 500); 
    
    INSERT INTO transportation(trip_id, transportation_type, company, date_from, date_to, location_from, location_to, seat, price, commission, additional_info, receipt, amount_payed ) 
    VALUES (2, 'vtc', 'Cabify' ,'2023-01-01 10:00', '2023-01-01 10:01', 'aqui', 'alli', '', 30, 9, 'info 1','', 30);
    

    -- CUSTOMER 2:
    INSERT INTO customers(user_id, first_name, last_name, email, dni, phone_prefix, phone, gender)
    VALUES (1, 'Juana', 'Juana Juana', 'Juana@gmail.com', '54657687F', '+34', 665455667, 'female' );

    INSERT INTO trips(customer_id, description, state)
    VALUES (2, 'Visita Madagascar', 'finalized');

    INSERT INTO trips(customer_id, description, state)
    VALUES (2, 'Tour Africa', 'ongoing');

    INSERT INTO host(trip_id, host_type, host_name, host_country, host_city, host_address, room_num, date_from, date_to, price, commission, additional_info, amount_payed) 
    VALUES (3, 'hostel', 'hostel Madagascar', 'Madagascar', 'Madagascar', 'Calle de Madagascar nº19', 'Habitacion 303B', '2023-01-01 13:50:00', '2023-02-10 08:20:00', 129.99, 83.00, 'Informacion adicional', 9.99 );

    INSERT INTO host( trip_id, host_type, host_name, host_country, host_city, host_address, room_num, date_from, date_to, price, commission, additional_info, amount_payed ) 
    VALUES (3, 'glamping', 'Come and glamping', 'Madagascar', 'Madagascar', 'Calle Madagascar nº3', 'Habitacion 8-Y', '2023-09-20 09:00:00', '2023-09-21 09:25:00', 20.00, 9.00, 'Informacion adicional', 10 );
    
    INSERT INTO host(trip_id, host_type, host_name, host_country, host_city, host_address, room_num, date_from, date_to, price, commission, additional_info, amount_payed ) 
    VALUES (4, 'resort', 'resort Africa', 'Africa', 'Africa', 'Calle de Africa nº19', 'Habitacion 303B', '2023-01-01 13:50:00', '2023-02-10 08:20:00', 10.99, 30.00, 'Informacion adicional', 0.99 );

    INSERT INTO host( trip_id, host_type, host_name, host_country, host_city, host_address, room_num, date_from, date_to, price, commission, additional_info, amount_payed ) 
    VALUES (4, 'rustic hostel', 'rustic and Africa ', 'Africa', 'Africa', 'Calle Africa nº3', 'Habitacion 8-Y', '2023-09-20 09:00:00', '2023-09-21 09:25:00', 60.00, 12.00, 'Informacion adicional', 30 );

    INSERT INTO activities(trip_id, activity_description, company, date_from, date_to, activitiy_location, price, commission, receipt, additional_info, amount_payed) 
    VALUES (3, 'Visita Madagascar', 'Madagascar company', '2023-01-01 10:00', '2023-01-01 10:01', 'La torre Madagascar', 90.00, 2.00, '', 'additional_info', 0); 
    
    INSERT INTO activities(trip_id, activity_description, company, date_from, date_to, activitiy_location, price, commission, receipt, additional_info, amount_payed) 
    VALUES (3, 'Paseo por el rio', 'italian river', '2023-01-01 10:00', '2023-01-01 10:01', 'rio', 30.00, 9.00, '', 'additional_info', 0);
    
    INSERT INTO activities(trip_id, activity_description, company, date_from, date_to, activitiy_location, price, commission, receipt, additional_info, amount_payed) 
    VALUES (4, 'Visita torre eifel', 'Paris company', '2023-01-01 10:00', '2023-01-01 10:01', 'La torre eifel', 50.00, 1.00, '', 'additional_info', 0); 
    
    INSERT INTO activities(trip_id, activity_description, company, date_from, date_to, activitiy_location, price, commission, receipt, additional_info, amount_payed) 
    VALUES (4, 'Paseo Parque', 'Company 1', '2023-01-01 10:00', '2023-01-01 10:01', 'Parque', 10.00, 1.00, '', 'additional_info', 4);

    INSERT INTO transportation(trip_id, transportation_type, company, date_from, date_to, location_from, location_to, seat, price, commission, additional_info, receipt, amount_payed ) 
    VALUES (3, 'private jet', 'flyMe 2 the moon' ,'2023-01-01 10:00', '2023-01-01 10:01', 'Alberca', 'Ontario', '1-A', 1000.50, 2, 'info 1','', 1000); 
    
    INSERT INTO transportation(trip_id, transportation_type, company, date_from, date_to, location_from, location_to, seat, price, commission, additional_info, receipt, amount_payed ) 
    VALUES (3, 'taxi', 'Taxis Company' ,'2023-01-01 10:00', '2023-01-01 10:01', 'Partida', 'Destino', '', 30, 9, 'info 1','', 30);
    
    INSERT INTO transportation(trip_id, transportation_type, company, date_from, date_to, location_from, location_to, seat, price, commission, additional_info, receipt, amount_payed ) 
    VALUES (4, 'long-distance bus', 'ALSA' ,'2023-01-01 10:00', '2023-01-01 10:01', 'Murcia', 'Sevilla', '1-A', 1000.50, 2, 'info 1','', 5); 
    
    INSERT INTO transportation(trip_id, transportation_type, company, date_from, date_to, location_from, location_to, seat, price, commission, additional_info, receipt, amount_payed ) 
    VALUES (4, 'vtc', 'Cabify' ,'2023-01-01 10:00', '2023-01-01 10:01', 'aqui', 'alli', '', 30, 9, 'info 1','', 9);
    
    `,
    [],
    "Post data"
  );
});
export default router;
