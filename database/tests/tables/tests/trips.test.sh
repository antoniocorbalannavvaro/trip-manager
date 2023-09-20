#! /bin/bash
bash ../../create_db.sh
printf "\n"
bash ../../CRUD/tests/post.sh
printf "\n"
printf "########################### TRIPS TEST ###########################"
printf "\n"

printf "\n"
printf "MUST BE SUCCESS:"
printf "\n"
printf "==================================="
printf "\n"

printf "[create trip]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/trips/createTrip' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[get all trips]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/trips/getAllTrips' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[get trip by id]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/trips/getTripById' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[update trip]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/trips/updateTrip' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[delete trip]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/trips/deleteTrip' \
  -H 'accept: application/json'
printf "\n"
printf "======================"
printf "\n"
printf "\n"

printf "MUST BE ERRORS:"
printf "\n"
printf "======================"
printf "\n"
printf "[create trip with no fk_customer_id]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/trips/createWithNoUserId' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[description MAX_LENGTH contraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/trips/descriptionMaxLength' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[state ENUM contraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/trips/stateEnumContraint' \
  -H 'accept: application/json'
printf "\n"
printf "======================"
printf "\n"
