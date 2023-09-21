#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[1;36m'
ORANGE='\033[0;33m'
YELLOW='\e[93m'
NC='\033[0m'

printf "${BLUE}=====================\n"
printf "|| ${NC}${GREEN}MUST BE SUCCESS${NC}${BLUE} ||"
printf "\n=====================${NC}\n"
#------------------------------------------
printf "\n${CYAN}[DROP DB] ${NC}"
curl 'http://localhost:3000/test/DB/dropDB'
printf "\n"

printf "${CYAN}[CREATE TABLES] ${NC}"
curl 'http://localhost:3000/test/DB/createTables'
printf "\n"

printf "${CYAN}[POST DATA] ${NC}"
curl 'http://localhost:3000/test/DB/crud/postData'
printf "\n"
#------------------------------------------

printf "\n${CYAN}[UPDATE user_name] ${NC}"
printf "${YELLOW}Can return null if log desactivated${NC} \n"

printf "\n${ORANGE}BEFORE:${NC} "
curl -s http://localhost:3000/test/DB/tables/users/getUserById/1 | jq -r '.result[0].user_name'

printf "${CYAN}RESPONSE:${NC} "
curl -s 'http://localhost:3000/test/DB/crud/updateUser/1'| jq -r '.result[0].user_name'

printf "${BLUE}AFTER:${NC} "
curl -s http://localhost:3000/test/DB/tables/users/getUserById/1 | jq -r '.result[0].user_name'
