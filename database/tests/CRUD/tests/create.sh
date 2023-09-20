#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'
CYAN='\033[1;36m'

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

#------------------------------------------

printf '\n'
printf "${CYAN}[CREATE USER]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/userRegister' \
  -H 'accept: application/json'
printf '\n'

printf '\n'
printf "${CYAN}[CREATE CUSTOMER]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/createCustomer' \
  -H 'accept: application/json'
printf '\n'

printf '\n'
printf "${CYAN}[CREATE TRIP]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/createTrip' \
  -H 'accept: application/json'
printf '\n'

printf '\n'
printf "${CYAN}[CREATE HOST]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/createHost' \
  -H 'accept: application/json'
printf '\n'

printf '\n'
printf "${CYAN}[CREATE TRANSPORTATION 1]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/createTransportation1' \
  -H 'accept: application/json'
printf '\n'

printf '\n'
printf "${CYAN}[CREATE TRANSPORTATION 2]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/createTransportation2' \
  -H 'accept: application/json'
printf '\n'

printf "\n"
printf "${CYAN}[CREATE ACTIVITY 1]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/createActivity1' \
  -H 'accept: application/json'
printf '\n'

printf "\n"
printf "${CYAN}[CREATE ACTIVITY 2]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/createActivity2' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[CREATE INVOICE]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/getInvoice' \
  -H 'accept: application/json'
printf '\n'
printf '\n'


printf "${CYAN}[CREATE INVOICE AMOUNT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/getInvoiceAmount' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[CREATE INVOICE AMOUNT PENDING]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/getAmountPending' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

printf "${CYAN}[CREATE COMMISSION AMOUNT]${NC}"
printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/getCommissionAmount' \
  -H 'accept: application/json'















