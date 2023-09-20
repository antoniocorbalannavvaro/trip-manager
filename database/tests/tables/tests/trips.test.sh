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

printf "[create trip]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/createTrip' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[get all trips]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/getAllTrips' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[get trip by id]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/getTripById' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[update trip]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/updateTrip' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[delete trip]"
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

printf "[create trip with no customer_id]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/createWithNoUserId' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[description exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/descriptionMaxLength' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[invalid type enum for state]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/trips/stateEnumContraint' \
  -H 'accept: application/json'
printf "\n"
