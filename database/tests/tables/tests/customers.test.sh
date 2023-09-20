#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[1;36m'
RED='\033[0;31m'
NC='\033[0m'
YELLOW='\e[93m'
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

printf "${CYAN}[CREATE CUSTOMER]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/createCustomer' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[GET ALL CUSTOMERS]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/getAllCustomers' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[GET CUSTOMER BY ID]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/getCustomerById' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[UPDATE CUSTOMER BY ID]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/updateCustomer' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[DELETE CUSTOMER BY ID]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/deleteCustomer' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "\n"
printf "${BLUE}==================="
printf "\n"
printf "|| ${NC}${RED}MUST BE ERROR${NC}${BLUE} ||"
printf "\n"
printf "===================${NC}"
printf "\n"
printf "\n"

printf "${CYAN}[UPDATE A CUSTOMER THAT DOESN'T EXISTS]${NC} ${YELLOW}res is not defined IT'S OK${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/updateNonExistCustomer' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[CREATE CUSTOMER WITH NO fk_user_id]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/userIdRequired' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[CUSTOMER WITH NO email]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/emailRequired' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[CUSTOMER WITH SAME email]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/uniqueEmail' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[CUSTOMER WITH SAME dni]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/uniqueDni' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[CUSTOMER WITH SAME phone]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/uniquePhone' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[first_name EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/firstNamelengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[last_name EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/lastNamelengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[email EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/emailLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[dni EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/dniLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[phone_prefix EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/prefixLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "${CYAN}[phone EXCEEDS LENGTH CONSTRAINT]${NC}"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/phoneLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"





