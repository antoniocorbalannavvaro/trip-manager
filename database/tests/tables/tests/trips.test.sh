#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
CYAN='\033[1;36m'
ORANGE='\033[0;33m'
YELLOW='\e[93m'
NC='\033[0m'
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
printf "\n"

printf "${CYAN}[POST DATA] ${NC}"
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/postData' \
  -H 'accept: application/json'
#------------------------------------------

printf "${BLUE}\n"
printf "\n"
printf "====================="
printf "\n"
printf "|| ${NC}${GREEN}MUST BE SUCCESS${NC}${BLUE} ||"
printf "\n"
printf "=====================${NC}"
printf "\n"
printf "\n"

printf "${CYAN}[CREATE TRIP]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/createTrip' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[GET ALL TRIPS]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/getAllTrips' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[GET TRIP BY ID]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/getTripById' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[UPDATE TRIP]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/updateTrip' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[DELETE TRIP]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/deleteTrip' \
  -H 'accept: application/json'

printf "\n"
printf "\n"
printf "${BLUE}==================="
printf "\n"
printf "|| ${NC}${RED}MUST BE ERROR${NC}${BLUE} ||"
printf "\n"
printf "===================${NC}"
printf "\n"
printf "\n"
printf "${ORANGE}TODO:${NC} ${YELLOW}TEST UPDATE A TRIP THAT DOESN'T EXIST${NC}"
printf "\n"
printf "\n"

printf "${CYAN}[CREATE TRIP WITH NO customer_id]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/createWithNoUserId' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[description EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/descriptionMaxLength' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[INVALID TYPE ENUM FOR state]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/stateEnumContraint' \
  -H 'accept: application/json'
printf "\n"
