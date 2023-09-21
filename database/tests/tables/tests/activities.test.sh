#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[1;36m'
RED='\033[0;31m'
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

printf "\n\n${CYAN}[CREATE ACTIVITY]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/createActivity'

printf "\n\n${CYAN}[GET ALL ACTIVITIES]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/getAllActivities'

printf "\n\n${CYAN}[GET ACTIVITY BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/getActivityById'

printf "\n\n${CYAN}[UPDATE ACTIVITY BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/updateActivityById'

printf "\n\n${CYAN}[DELETE ACTIVITY BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/deleteActivityById'

printf "\n\n${BLUE}===================\n"
printf "|| ${NC}${RED}MUST BE ERROR${NC}${BLUE} ||\n"
printf "===================${NC}"

printf "\n\n${CYAN}[UPDATE AN ACTIVITY THAT DOESN'T EXISTS]${NC} ${YELLOW}res is not defined IT'S OK${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/updateNonExistsActivity'

printf "\n\n${CYAN}[ACTIVITY WITH NO trip_id]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/activityWithNoTripId'

printf "\n\n${CYAN}[description EXCEEDS LENGHT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/descriptionMaxLenght'

printf "\n\n${CYAN}[company EXCEEDS LENGHT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/companyMaxLenght'

printf "\n\n${CYAN}[location EXCEEDS LENGHT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/locationMaxLenght'

printf "\n\n${CYAN}[additional_info EXCEEDS LENGHT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/additionalInfoMaxLenght'

printf "\n\n${CYAN}[price EXCEEDS LENGHT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/priceMaxLenght'

printf "\n\n${CYAN}[commission EXCEEDS LENGHT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/commissionMaxLenght'

printf "\n\n${CYAN}[amount_payed EXCEEDS LENGHT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/amountPayedMaxLenght'

printf "\n\n${CYAN}[date_to INVALID TYPE]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/dateToType'

printf "\n\n${CYAN}[date_from INVALID TYPE]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/activities/dateFromType'

printf '\n'