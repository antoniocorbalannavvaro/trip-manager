#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[1;36m'
ORANGE='\033[0;33m'
YELLOW='\e[93m'

NC='\033[0m'
printf "${BLUE}====================="
printf "\n"
printf "|| ${NC}${GREEN}MUST BE SUCCESS${NC}${BLUE} ||"
printf "\n"
printf "=====================${NC}"
printf "\n"
printf "\n"
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
printf "\n"
#------------------------------------------

printf "${CYAN}[UPDATE USER] ${NC}"
printf "${YELLOW}Can return null if log desactivated${NC}"
printf "\n"
printf "${ORANGE}BEFORE:${NC} "
curl -s http://localhost:3000/test/DB/tables/users/getUserById/1 | jq -r '.result[0].user_name'

curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/updateUser/1' \
  -H 'accept: application/json'
printf "\n"

printf "${BLUE}AFTER:${NC} "
curl -s http://localhost:3000/test/DB/tables/users/getUserById/1 | jq -r '.result[0].user_name'
