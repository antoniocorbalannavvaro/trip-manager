#! /bin/bash
CYAN='\033[1;36m'
NC='\033[0m'
bash ../../database/tests/CRUD/tests/post.sh

printf "\n\n${CYAN}[GET USER]${NC}\n"
curl 'http://localhost:3000/api/users'

printf "\n\n${CYAN}[CREATE USER]${NC}\n"
curl -X 'POST' \
  'http://localhost:3000/api/users' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "userName": "topo", 
    "email": "topo@gmail.com", 
    "password": "my_password909",
    "gender": "male", 
    "dni": "43434343F"
  }'

printf "\n\n${CYAN}[GET USER BY ID]${NC}\n"
curl 'http://localhost:3000/api/users/2'

printf "\n\n${CYAN}[UPDATE USER BY ID]${NC}\n"
curl -X 'PUT' \
  'http://localhost:3000/api/users/2' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "userName": "New name", 
    "email": "topo@gmail.com", 
    "password": "my_password909",
    "gender": "male", 
    "dni": "43434343F"
  }'

printf "\n\n${CYAN}[DELETE USER BY ID]${NC}\n"
curl -X 'DELETE' 'http://localhost:3000/api/users/2'

printf "\n\n${CYAN}[GET USER BY ID]${NC}\n"
curl 'http://localhost:3000/api/users/2'

printf '\n'