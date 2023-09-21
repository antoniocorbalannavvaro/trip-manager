#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
CYAN='\033[1;36m'
ORANGE='\033[0;33m'
YELLOW='\e[93m'
NC='\033[0m'

#------------------------------------------
printf "${CYAN}[DROP DB] ${NC} "
curl 'http://localhost:3000/test/DB/dropDB'

printf "\n${CYAN}[CREATE TABLES] ${NC} "
curl 'http://localhost:3000/test/DB/createTables'

printf "\n${CYAN}[POST DATA] ${NC} "
curl 'http://localhost:3000/test/DB/crud/postData'
#------------------------------------------

printf "\n${BLUE}\n====================="
printf "\n|| ${NC}${GREEN}MUST BE SUCCESS${NC}${BLUE} ||"
printf "\n=====================${NC}"

printf "\n\n${CYAN}[CREATE TRIP]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/trips/createTrip'

printf "\n\n${CYAN}[GET ALL TRIPS]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/trips/getAllTrips'

printf "\n\n${CYAN}[GET TRIP BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/trips/getTripById'

printf "\n\n${CYAN}[UPDATE TRIP]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/trips/updateTrip'

printf "\n\n${CYAN}[DELETE TRIP]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/trips/deleteTrip'

printf "\n\n${BLUE}===================\n"
printf "|| ${NC}${RED}MUST BE ERROR${NC}${BLUE} ||\n"
printf "===================${NC}"

printf "\n\n${ORANGE}TODO:${NC} ${YELLOW}TEST UPDATE A TRIP THAT DOESN'T EXIST${NC}"

printf "\n\n${CYAN}[CREATE TRIP WITH NO customer_id]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/trips/createWithNoUserId'

printf "\n\n${CYAN}[description EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/trips/descriptionMaxLength'

printf "\n\n${CYAN}[INVALID TYPE ENUM FOR state]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/trips/stateEnumContraint'
