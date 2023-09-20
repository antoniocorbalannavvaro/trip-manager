#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[1;36m'
RED='\033[0;31m'
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

printf "${CYAN}[CREATE USER]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/createUsers' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[SELECT ALL USERS]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/getUsers' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[SELECT USER BY ID]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/getUserById/2' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[UPDATE USER BY ID]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/updateUser' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[DELETE USER BY ID]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/deleteUser' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[USERS TYPE CONSTRAINT INSERT NUMERIC]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/usersTypeConstraintTryNumeric' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[USERS TYPE CONSTRAINT INSERT BOOLEAN]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/usersTypeConstraintTryBoolean' \
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

printf "${CYAN}[UPDATE NON EXISTS USER]${NC} ${YELLOW}res is not defined IT'S OK${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/updateNonExistUser' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[USERS WITH SAME user_name]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/uniqueUserName' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[USERS WITH SAME email]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/uniqueEmail' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[USERS WITH SAME dni]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/uniqueDni' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[CREATE USER WITH NO user_name]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/usernameRequired' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[CREATE USER WITH NO password]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/passwordRequired' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[CREATE USER WITH NO email]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/emailRequired' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[user_name EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/userNameMaxLenght' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[email EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/emailMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[dni EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/dniMaxLenght' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[password EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/passwordMaxLenght' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "${CYAN}[INVALID TYPE ENUM FOR gender]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/enumConstraint' \
  -H 'accept: application/json'
printf "\n"


