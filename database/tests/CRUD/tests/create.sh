#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'
CYAN='\033[1;36m'

printf "${BLUE}=====================\n"
printf "||${NC}${GREEN}MUST BE SUCCESS${NC}${BLUE} ||"
printf "\n=====================${NC}"
#------------------------------------------
printf "\n\n${CYAN}[DROP DB] ${NC}\n"
curl 'http://localhost:3000/test/DB/dropDB'

printf "\n\n${CYAN}[CREATE TABLES] ${NC}\n"
curl 'http://localhost:3000/test/DB/createTables'
#------------------------------------------

printf "\n\n${CYAN}[CREATE USER]${NC}\n"
curl 'http://localhost:3000/test/DB/crud/userRegister'

printf '\n'

printf "\n${CYAN}[CREATE CUSTOMER]${NC}\n"
curl 'http://localhost:3000/test/DB/crud/createCustomer'

printf '\n'

printf "\n${CYAN}[CREATE TRIP]${NC}\n"
curl 'http://localhost:3000/test/DB/crud/createTrip'
printf '\n'

printf "\n${CYAN}[CREATE HOST]${NC}\n"
curl 'http://localhost:3000/test/DB/crud/createHost'
  
printf '\n'

printf "\n${CYAN}[CREATE TRANSPORTATION 1]${NC}\n"
curl 'http://localhost:3000/test/DB/crud/createTransportation1'
  
printf '\n'

printf "\n${CYAN}[CREATE TRANSPORTATION 2]${NC}\n"
curl 'http://localhost:3000/test/DB/crud/createTransportation2'
  
printf '\n'

printf "\n${CYAN}[CREATE ACTIVITY 1]${NC}\n"
curl 'http://localhost:3000/test/DB/crud/createActivity1'
  
printf '\n'

printf "\n${CYAN}[CREATE ACTIVITY 2]${NC}\n"
curl 'http://localhost:3000/test/DB/crud/createActivity2'
  
printf '\n'

printf "\n${CYAN}[CREATE INVOICE]${NC}\n"
curl 'http://localhost:3000/test/DB/crud/getInvoice'
  
printf '\n'

printf "\n${CYAN}[CREATE INVOICE AMOUNT]${NC}\n"
curl 'http://localhost:3000/test/DB/crud/getInvoiceAmount'
  
printf '\n'

printf "\n${CYAN}[CREATE INVOICE AMOUNT PENDING]${NC}\n"
curl 'http://localhost:3000/test/DB/crud/getAmountPending'
  
printf '\n'

printf "\n${CYAN}[CREATE COMMISSION AMOUNT]${NC}\n"
curl 'http://localhost:3000/test/DB/crud/getCommissionAmount'
  















