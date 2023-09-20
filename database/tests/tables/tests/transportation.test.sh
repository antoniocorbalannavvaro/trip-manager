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

printf "${CYAN}[CREATE TRANSPORTATION]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/createTransportation' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[GET ALL TRANSPORTATIONS]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/getAllTransportation' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[GET TRANSPORTATION BY ID]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/getTransportationById' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[UPDATE TRANSPORTATION BY ID]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/updateTransportationById' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[DELETE TRANSPORTATION BY ID]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/deleteTransportationById' \
  -H 'accept: application/json'
printf '\n'

printf "\n"
printf "${BLUE}==================="
printf "\n"
printf "|| ${NC}${RED}MUST BE ERROR${NC}${BLUE} ||"
printf "\n"
printf "===================${NC}"
printf "\n"
printf "\n"
printf "\n"
printf "${ORANGE}TODO:${NC} ${YELLOW}TEST UPDATE A TRANSPORTATION THAT DOESN'T EXIST${NC}"
printf "\n"
printf "${CYAN}[TRANSPORTATION WITH NO trip_id]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/transportationIdRequired' \
  -H 'accept: application/json'
printf '\n'

printf '\n'
printf "${CYAN}[TRANSPORTATION WITH NO transportation_type]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/transportationTypeRequired' \
  -H 'accept: application/json'
printf '\n'

printf '\n'
printf "${CYAN}[NO VALID ENUM FOR transportation_type]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/transportationTypeEnum' \
  -H 'accept: application/json'
printf '\n'

printf '\n'
printf "${CYAN}[company EXCEEDS LENGTH CONTRAINT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/companyMaxLenght' \
  -H 'accept: application/json'
printf '\n'

printf '\n'
printf "${CYAN}[location_from EXCEEDS LENGTH CONTRAINT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/locationFromMaxLenght' \
  -H 'accept: application/json'
printf '\n'

printf '\n'
printf "${CYAN}[location_to EXCEEDS LENGTH CONTRAINT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/locationToMaxLenght' \
  -H 'accept: application/json'
printf '\n'


printf '\n'
printf "${CYAN}[seat EXCEEDS LENGTH CONTRAINT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/seatMaxLenght' \
  -H 'accept: application/json'
printf '\n'


printf '\n'
printf "${CYAN}[addition_info EXCEEDS LENGTH CONTRAINT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/infoMaxLenght' \
  -H 'accept: application/json'
printf '\n'

printf '\n'
printf "${CYAN}[price EXCEEDS NUMERIC PRECISION CONTRAINT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/priceMaxLenght' \
  -H 'accept: application/json'
printf '\n'


printf '\n'
printf "${CYAN}[commission EXCEEDS NUMERIC PRECISION CONTRAINT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/commissionMaxLenght' \
  -H 'accept: application/json'
printf '\n'

printf '\n'
printf "${CYAN}[amout_payed EXCEEDS NUMERIC PRECISION CONTRAINT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/amountPayedMaxLenght' \
  -H 'accept: application/json'
printf '\n'

printf '\n'
printf "${CYAN}[date_from INVALID TYPE]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/dateFromType' \
  -H 'accept: application/json'
printf '\n'

printf '\n'
printf "${CYAN}[date_to INVALID TYPE]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/transportation/dateToType' \
  -H 'accept: application/json'
printf '\n'









