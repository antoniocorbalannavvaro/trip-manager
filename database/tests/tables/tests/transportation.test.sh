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

printf "\n\n${CYAN}[CREATE TRANSPORTATION]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/createTransportation'

printf "\n\n${CYAN}[GET ALL TRANSPORTATIONS]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/getAllTransportation'

printf "\n\n${CYAN}[GET TRANSPORTATION BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/getTransportationById'

printf "\n\n${CYAN}[UPDATE TRANSPORTATION BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/updateTransportationById'

printf "\n\n${CYAN}[DELETE TRANSPORTATION BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/deleteTransportationById'

printf "\n\n${BLUE}===================\n"
printf "|| ${NC}${RED}MUST BE ERROR${NC}${BLUE} ||\n"
printf "===================${NC}"

printf "\n\n${ORANGE}TODO:${NC} ${YELLOW}TEST UPDATE A TRANSPORTATION THAT DOESN'T EXIST${NC}"

printf "\n\n${CYAN}[TRANSPORTATION WITH NO trip_id]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/transportationIdRequired'

printf "\n\n${CYAN}[TRANSPORTATION WITH NO transportation_type]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/transportationTypeRequired'

printf "\n\n${CYAN}[NO VALID ENUM FOR transportation_type]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/transportationTypeEnum'

printf "\n\n${CYAN}[company EXCEEDS LENGTH CONTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/companyMaxLenght'

printf "\n\n${CYAN}[location_from EXCEEDS LENGTH CONTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/locationFromMaxLenght'

printf "\n\n${CYAN}[location_to EXCEEDS LENGTH CONTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/locationToMaxLenght'

printf "\n\n${CYAN}[seat EXCEEDS LENGTH CONTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/seatMaxLenght'

printf "\n\n${CYAN}[addition_info EXCEEDS LENGTH CONTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/infoMaxLenght'
printf "\n\n${CYAN}[price EXCEEDS NUMERIC PRECISION CONTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/priceMaxLenght'

printf "\n\n${CYAN}[commission EXCEEDS NUMERIC PRECISION CONTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/commissionMaxLenght'

printf "\n\n${CYAN}[amout_payed EXCEEDS NUMERIC PRECISION CONTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/amountPayedMaxLenght'

printf "\n\n${CYAN}[date_from INVALID TYPE]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/dateFromType'

printf "\n\n${CYAN}[date_to INVALID TYPE]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/transportation/dateToType'

printf '\n'