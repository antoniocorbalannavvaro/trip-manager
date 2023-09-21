#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[1;36m'
RED='\033[0;31m'
YELLOW='\e[93m'
NC='\033[0m'

#------------------------------------------
printf "${CYAN}[DROP DB] ${NC}"
curl 'http://localhost:3000/test/DB/dropDB'

printf "\n${CYAN}[CREATE TABLES] ${NC}"
curl 'http://localhost:3000/test/DB/createTables'

printf "\n${CYAN}[POST DATA] ${NC}"
curl 'http://localhost:3000/test/DB/crud/postData'
#------------------------------------------

printf "\n${BLUE}\n====================="
printf "\n|| ${NC}${GREEN}MUST BE SUCCESS${NC}${BLUE} ||"
printf "\n=====================${NC}\n"

printf "\n${CYAN}[CREATE USER]${NC}\n" 
curl 'http://localhost:3000/test/DB/tables/users/createUsers'

printf "\n\n${CYAN}[SELECT ALL USERS]${NC}\n" 
curl 'http://localhost:3000/test/DB/tables/users/getUsers'

printf "\n\n${CYAN}[SELECT USER BY ID]${NC}\n" 
curl 'http://localhost:3000/test/DB/tables/users/getUserById/2'

printf "\n\n${CYAN}[UPDATE USER BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/updateUser'

printf "\n\n${CYAN}[DELETE USER BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/deleteUser'

printf "\n\n${CYAN}[USERS TYPE CONSTRAINT INSERT NUMERIC]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/usersTypeConstraintTryNumeric'

printf "\n\n${CYAN}[USERS TYPE CONSTRAINT INSERT BOOLEAN]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/usersTypeConstraintTryBoolean'

printf "\n\n${BLUE}===================\n"
printf "|| ${NC}${RED}MUST BE ERROR${NC}${BLUE} ||\n"
printf "===================${NC}"

printf "\n\n${CYAN}[UPDATE NON EXISTS USER]${NC} ${YELLOW}res is not defined IT'S OK${NC}\n" 
curl 'http://localhost:3000/test/DB/tables/users/updateNonExistUser'

printf "\n\n${CYAN}[USERS WITH SAME user_name]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/uniqueUserName'

printf "\n\n${CYAN}[USERS WITH SAME email]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/uniqueEmail'

printf "\n\n${CYAN}[USERS WITH SAME dni]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/uniqueDni'

printf "\n\n${CYAN}[CREATE USER WITH NO user_name]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/usernameRequired'

printf "\n\n${CYAN}[CREATE USER WITH NO password]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/passwordRequired'

printf "\n\n${CYAN}[CREATE USER WITH NO email]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/emailRequired'

printf "\n\n${CYAN}[user_name EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/userNameMaxLenght'

printf "\n\n${CYAN}[email EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/emailMaxLenght'

printf "\n\n${CYAN}[dni EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/dniMaxLenght'

printf "\n\n${CYAN}[password EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/passwordMaxLenght'

printf "\n\n${CYAN}[INVALID TYPE ENUM FOR gender]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/users/enumConstraint'
printf '\n'