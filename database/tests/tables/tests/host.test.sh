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

printf "\n\n${CYAN}[CREATE HOST]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/createHost'

printf "\n\n${CYAN}[GET ALL HOSTES]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/getAllHostes'

printf "\n\n${CYAN}[GET HOST BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/getHostById/9'

printf "\n\n${CYAN}[DELETE HOST BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/deleteHostById/9'

printf "\n\n${CYAN}[UPDATE HOST BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/updateHostById/8'

printf "\n\n${BLUE}===================\n"
printf "|| ${NC}${RED}MUST BE ERROR${NC}${BLUE} ||\n"
printf "===================${NC}"

printf "\n\n${ORANGE}TODO:${NC} ${YELLOW}TEST UPDATE A HOST THAT DOESN'T EXIST${NC}"

printf "\n\n${CYAN}[CREATE HOST WITH NO trip_id]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/createHostWithNoTripId'

printf "\n\n${CYAN}[INVALID TYPE ENUM FOR host_type]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/invalidHostTypeEnum'

printf "\n\n${CYAN}[host_name EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/hostNameMaxLenght'

printf "\n\n${CYAN}[host_country EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/hostCountryMaxLenght'

printf "\n\n${CYAN}[host_city EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/hostCityMaxLenght'

printf "\n\n${CYAN}[host_address EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/hostAddressMaxLenght'

printf "\n\n${CYAN}[room_num EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/roomNumMaxLenght'

printf "\n\n${CYAN}[price EXCEEDS NUMERIC PRECISION CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/priceMaxLenght'

printf "\n\n${CYAN}[commission EXCEEDS NUMERIC PRECISION CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/commissionMaxLenght'

printf "\n\n${CYAN}[amount_payed EXCEEDS NUMERIC PRECISION CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/amountPayedMaxLenght'

printf "\n\n${CYAN}[additional_info EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/additionalInfoMaxLenght'

printf "\n\n${CYAN}[date_from INVALID TYPE]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/dateFromType'

printf "\n\n${CYAN}[date_to INVALID TYPE]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/host/dateToType'

printf '\n'