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
      trips(customer_id, description)
    VALUES
      (1, 'Viaje a italia');
    
    INSERT INTO
      trips(customer_id, description)
    VALUES
      (2, 'Viaje a Alemania');
    
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
      receipt)
    VALUES 
    (1, 'Visita torre eifel', 'Paris company', '2023-01-01 10:00', '2023-01-01 10:01', 'La torre eifel', 50.00, 1.00, '');
    
    INSERT INTO activities(
      trip_id,
      activity_description,
      company,
      date_from,
      date_to,
      activitiy_location,
      price,
      commission,
      receipt)
    VALUES 
    (2, 'Paseo por el rio', 'Company 1', '2023-01-01 10:00', '2023-01-01 10:01', 'rio', 10.00, 1.00, '');
    
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
   