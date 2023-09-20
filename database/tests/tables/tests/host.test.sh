#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'
#------------------------------------------
curl -X 'GET' \
  'http://localhost:3000/test/DB/dropDB' \
  -H 'accept: application/json'
printf "\n"

curl -X 'GET' \
  'http://localhost:3000/test/DB/createTables' \
  -H 'accept: application/json'
printf "\n"

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

printf "[create host]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/createHost' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[get all hostes]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/getAllHostes' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[get host by id]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/getHostById/9' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[delete host by id]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/deleteHostById/9' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[update host by id]"
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

printf "[create host with no trip_id]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/createHostWithNoTripId' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[invalid type enum for host_type]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/invalidHostTypeEnum' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[host_name exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/hostNameMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[host_country exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/hostCountryMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[host_city exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/hostCityMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[host_address exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/hostAddressMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[room_num exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/roomNumMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[price exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/priceMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[commission exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/commissionMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[amount_payed exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/amountPayedMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[additional_info exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/additionalInfoMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[date_from incorrect type]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/dateFromType' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[date_to incorrect type]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/host/dateToType' \
  -H 'accept: application/json'
printf "\n"
printf "\n"