#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[1;36m'
NC='\033[0m'

printf "${BLUE}====================="
printf "\n"
printf "|| ${NC}${GREEN}MUST BE SUCCESS${NC}${BLUE} ||"
printf "\n=====================${NC}\n"
#------------------------------------------
printf "\n${CYAN}[DROP DB] ${NC} "
curl 'http://localhost:3000/test/DB/dropDB'
  
printf "\n${CYAN}[CREATE TABLES] ${NC} "
curl 'http://localhost:3000/test/DB/createTables'
  
printf "\n${CYAN}[POST DATA] ${NC} "
curl 'http://localhost:3000/test/DB/crud/postData'
printf '\n'
#------------------------------------------

printf "\n${CYAN}[DELETE USER] ${NC}\n"
curl 'http://localhost:3000/test/DB/crud/deleteUser'
  
printf '\n'

#------------------------------------------
printf "\n${CYAN}[DROP DB] ${NC} "
curl 'http://localhost:3000/test/DB/dropDB'
  
printf "\n${CYAN}[CREATE TABLES] ${NC} "
curl 'http://localhost:3000/test/DB/createTables'
  
printf "\n${CYAN}[POST DATA] ${NC} "
curl 'http://localhost:3000/test/DB/crud/postData'
printf '\n'
#------------------------------------------

printf "\n${CYAN}[DELETE CUSTOMER] ${NC}\n"
curl 'http://localhost:3000/test/DB/crud/deleteCustomer'
  
printf '\n'

#------------------------------------------
printf "\n${CYAN}[DROP DB] ${NC} "
curl 'http://localhost:3000/test/DB/dropDB'
  
printf "\n${CYAN}[CREATE TABLES] ${NC} "
curl 'http://localhost:3000/test/DB/createTables'
  
printf "\n${CYAN}[POST DATA] ${NC} "
curl 'http://localhost:3000/test/DB/crud/postData'
printf '\n'
#------------------------------------------

printf "\n${CYAN}[DELETE TRIP] ${NC}\n"
curl 'http://localhost:3000/test/DB/crud/deleteTrip'
  
printf '\n'

#------------------------------------------
printf "\n${CYAN}[DROP DB] ${NC} "
curl 'http://localhost:3000/test/DB/dropDB'
  
printf "\n${CYAN}[CREATE TABLES] ${NC} "
curl 'http://localhost:3000/test/DB/createTables'
  
printf "\n${CYAN}[POST DATA] ${NC} "
curl 'http://localhost:3000/test/DB/crud/postData'
printf '\n'
#------------------------------------------

printf "\n${CYAN}[DELETE HOST] ${NC}\n"
curl 'http://localhost:3000/test/DB/crud/deleteHost'
  
printf '\n'

#------------------------------------------
printf "\n${CYAN}[DROP DB] ${NC} "
curl 'http://localhost:3000/test/DB/dropDB'
  
printf "\n${CYAN}[CREATE TABLES] ${NC} "
curl 'http://localhost:3000/test/DB/createTables'
  
printf "\n${CYAN}[POST DATA] ${NC} "
curl 'http://localhost:3000/test/DB/crud/postData'
printf '\n'
#------------------------------------------

printf "\n${CYAN}[DELETE TRANSPORTATION] ${NC}\n"
curl 'http://localhost:3000/test/DB/crud/deleteTransportation'
  
printf '\n'

#------------------------------------------
printf "\n${CYAN}[DROP DB] ${NC} "
curl 'http://localhost:3000/test/DB/dropDB'
  
printf "\n${CYAN}[CREATE TABLES] ${NC} "
curl 'http://localhost:3000/test/DB/createTables'
  
printf "\n${CYAN}[POST DATA] ${NC} "
curl 'http://localhost:3000/test/DB/crud/postData'
printf '\n'
#------------------------------------------

printf "\n${CYAN}[DELETE ACTIVITY] ${NC}\n"
curl 'http://localhost:3000/test/DB/crud/deleteActivity'
  
