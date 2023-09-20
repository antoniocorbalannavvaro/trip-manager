#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[1;36m'
NC='\033[0m'
printf "${BLUE}====================="
printf "\n"
printf "|| ${NC}${GREEN}MUST BE SUCCESS${NC}${BLUE} ||"
printf "\n"
printf "=====================${NC}"
printf "\n"
printf "\n"
#------------------------------------------
printf "${CYAN}[DROP DB] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/dropDB' \
  -H 'accept: application/json'

printf "\n"

printf "${CYAN}[CREATE TABLES] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/createTables' \
  -H 'accept: application/json'
printf '\n'

printf "${CYAN}[POST DATA] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/postData' \
  -H 'accept: application/json'
printf '\n'
#------------------------------------------

printf "\n"
printf "${CYAN}[DELETE USER] ${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/deleteUser' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

#------------------------------------------
printf "${CYAN}[DROP DB] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/dropDB' \
  -H 'accept: application/json'

printf "\n"

printf "${CYAN}[CREATE TABLES] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/createTables' \
  -H 'accept: application/json'
printf '\n'

printf "${CYAN}[POST DATA] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/postData' \
  -H 'accept: application/json'
printf '\n'
#------------------------------------------

printf "\n"
printf "${CYAN}[DELETE CUSTOMER] ${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/deleteCustomer' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

#------------------------------------------
printf "${CYAN}[DROP DB] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/dropDB' \
  -H 'accept: application/json'

printf "\n"

printf "${CYAN}[CREATE TABLES] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/createTables' \
  -H 'accept: application/json'
printf '\n'

printf "${CYAN}[POST DATA] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/postData' \
  -H 'accept: application/json'
printf '\n'
#------------------------------------------

printf "\n"
printf "${CYAN}[DELETE TRIP] ${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/deleteTrip' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

#------------------------------------------
printf "${CYAN}[DROP DB] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/dropDB' \
  -H 'accept: application/json'

printf "\n"

printf "${CYAN}[CREATE TABLES] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/createTables' \
  -H 'accept: application/json'
printf '\n'

printf "${CYAN}[POST DATA] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/postData' \
  -H 'accept: application/json'
printf '\n'
#------------------------------------------

printf '\n'
printf "${CYAN}[DELETE HOST] ${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/deleteHost' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

#------------------------------------------
printf "${CYAN}[DROP DB] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/dropDB' \
  -H 'accept: application/json'

printf "\n"

printf "${CYAN}[CREATE TABLES] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/createTables' \
  -H 'accept: application/json'
printf '\n'

printf "${CYAN}[POST DATA] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/postData' \
  -H 'accept: application/json'
printf '\n'
#------------------------------------------

printf "\n"
printf "${CYAN}[DELETE TRANSPORTATION] ${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/deleteTransportation' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

#------------------------------------------
printf "${CYAN}[DROP DB] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/dropDB' \
  -H 'accept: application/json'

printf "\n"

printf "${CYAN}[CREATE TABLES] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/createTables' \
  -H 'accept: application/json'
printf '\n'

printf "${CYAN}[POST DATA] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/postData' \
  -H 'accept: application/json'
printf '\n'
#------------------------------------------

printf "\n"
printf "${CYAN}[DELETE ACTIVITY] ${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/deleteActivity' \
  -H 'accept: application/json'
