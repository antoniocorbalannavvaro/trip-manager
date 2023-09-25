#! /bin/bash
curl -X 'GET' \
  'http://localhost:3000/test/DB/dropDB' \
  -H 'accept: application/json'

printf "\n"

curl -X 'GET' \
  'http://localhost:3000/test/DB/createTables' \
  -H 'accept: application/json'

printf '\n\n[REGISTER]\n'
curl \
  'http://localhost:3000/auth/register' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "userName": "topo_1", 
    "email": "topo_1@gmail.com", 
    "password": "myTopoPassword1234"
  }'

printf '\n\n[LOGIN]\n'
curl \
  'http://localhost:3000/auth/login' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "topo_1@gmail.com", 
    "password": "myTopoPassword1234"
  }'

printf '\n\n[ACCESS TO CUSTOMERS]\n'
curl http://localhost:3000/api/customers

printf '\n\n[LOG OUT]\n'
curl \
  'http://localhost:3000/auth/logout' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "topo_1@gmail.com", 
    "password": "myTopoPassword1234"
  }'

printf '\n\n[ACCESS TO CUSTOMERS]\n'
curl http://localhost:3000/api/customers

printf '\n'

