#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'
#------------------------------------------
curl -X 'GET' \
  'http://localhost:3000/test/DB/dropDB' \
  -H 'accept: application/json'

printf "\n"

curl -X 'GET' \
  'http://localhost:3000/test/DB/createTables' \
  -H 'accept: application/json'

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

printf "[create customer]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/createCustomer' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[get all customers]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/getAllCustomers' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[get customer by id]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/getCustomerById' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[update customer by id]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/updateCustomer' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[delete customer by id]"
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

printf "[create customer with no fk_user_id]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/userIdRequired' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[customer with no email]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/emailRequired' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[customers with same email]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/uniqueEmail' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[customers with same dni]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/uniqueDni' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[customers with same phone]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/uniquePhone' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[first_name exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/firstNamelengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[last_name exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/lastNamelengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[email exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/emailLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[dni exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/dniLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[phone_prefix exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/prefixLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[phone exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/customers/phoneLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"





