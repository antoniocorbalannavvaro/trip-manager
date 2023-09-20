#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[1;36m'
RED='\033[0;31m'
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
printf "\n"
#------------------------------------------

printf "\n"
printf "${BLUE}====================="
printf "\n"
printf "|| ${NC}${GREEN}MUST BE SUCCESS${NC}${BLUE} ||"
printf "\n"
printf "=====================${NC}"
printf "\n"
printf "\n"

printf "${CYAN}[CREATE ACTIVITY]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/createActivity' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[GET ALL ACTIVITIES]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/getAllActivities' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[GET ACTIVITY BY ID]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/getActivityById' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[UPDATE ACTIVITY BY ID]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/updateActivityById' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[DELETE ACTIVITY BY ID]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/deleteActivityById' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${BLUE}==================="
printf "\n"
printf "|| ${NC}${RED}MUST BE ERROR${NC}${BLUE} ||"
printf "\n"
printf "===================${NC}"
printf "\n"
printf "\n"

printf "${CYAN}[ACTIVITY WITH NO trip_id]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/activityWithNoTripId' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[description EXCEEDS LENGHT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/descriptionMaxLenght' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[company EXCEEDS LENGHT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/companyMaxLenght' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[location EXCEEDS LENGHT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/locationMaxLenght' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[additional_info EXCEEDS LENGHT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/additionalInfoMaxLenght' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[price EXCEEDS LENGHT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/priceMaxLenght' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[commission EXCEEDS LENGHT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/commissionMaxLenght' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[amount_payed EXCEEDS LENGHT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/amountPayedMaxLenght' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[date_to INVALID TYPE]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/dateToType' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[date_from INVALID TYPE]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/dateFromType' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[UPDATE AN ACTIVITY THAT DOESN'T EXISTS]${NC} ${YELLOW}res is not defined IT'S OK${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/activities/updateNonExistsActivity' \
  -H 'accept: application/json'
printf '\n'
printf '\n'
