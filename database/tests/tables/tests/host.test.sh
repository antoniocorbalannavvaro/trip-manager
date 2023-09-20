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

printf "${CYAN}[CREATE HOST]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/createHost' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[GET ALL HOSTES]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/getAllHostes' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[GET HOST BY ID]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/getHostById/9' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[DELETE HOST BY ID]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/deleteHostById/9' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[UPDATE HOST BY ID]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/updateHostById/8' \
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

printf "${ORANGE}TODO:${NC} ${YELLOW}TEST UPDATE A HOST THAT DOESN'T EXIST${NC}"
printf "\n"
printf "\n"

printf "${CYAN}[CREATE HOST WITH NO trip_id]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/createHostWithNoTripId' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[INVALID TYPE ENUM FOR host_type]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/invalidHostTypeEnum' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[host_name EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/hostNameMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[host_country EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/hostCountryMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[host_city EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/hostCityMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[host_address EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/hostAddressMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[room_num EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/roomNumMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[price EXCEEDS NUMERIC PRECISION CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/priceMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[commission EXCEEDS NUMERIC PRECISION CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/commissionMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[amount_payed EXCEEDS NUMERIC PRECISION CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/amountPayedMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[additional_info EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/additionalInfoMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[date_from INVALID TYPE]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/dateFromType' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[date_to INVALID TYPE]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/dateToType' \
  -H 'accept: application/json'
printf "\n"
printf "\n"