#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[1;36m'
NC='\033[0m'

printf "${BLUE}=====================\n"
printf "|| ${NC}${GREEN}MUST BE SUCCESS${NC}${BLUE} ||"
printf "\n=====================${NC}\n\n"

printf "${CYAN}[DROP DB] ${NC}"
curl 'http://localhost:3000/test/DB/dropDB'
  
printf "\n"

printf "${CYAN}[CREATE TABLES] ${NC}"
curl 'http://localhost:3000/test/DB/createTables'
  
printf "\n"

printf "${CYAN}[POST DATA] ${NC}"
curl 'http://localhost:3000/test/DB/crud/postData'
  