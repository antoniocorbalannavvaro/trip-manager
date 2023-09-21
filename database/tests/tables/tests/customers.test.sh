#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
CYAN='\033[1;36m'
RED='\033[0;31m'
NC='\033[0m'
YELLOW='\e[93m'

#------------------------------------------
printf "${CYAN}[DROP DB] ${NC} "
curl 'http://localhost:3000/test/DB/dropDB'

printf "\n${CYAN}[CREATE TABLES] ${NC} "
curl 'http://localhost:3000/test/DB/createTables'

printf "\n${CYAN}[POST DATA] ${NC} "
curl 'http://localhost:3000/test/DB/crud/postData'
#------------------------------------------

printf "${BLUE}\n\n=====================\n"
printf "|| ${NC}${GREEN}MUST BE SUCCESS${NC}${BLUE} ||"
printf "\n=====================${NC}"

printf "\n\n${CYAN}[CREATE CUSTOMER]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/createCustomer'

printf "\n\n${CYAN}[GET ALL CUSTOMERS]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/getAllCustomers'

printf "\n\n${CYAN}[GET CUSTOMER BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/getCustomerById'

printf "\n\n${CYAN}[UPDATE CUSTOMER BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/updateCustomer'

printf "\n\n${CYAN}[DELETE CUSTOMER BY ID]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/deleteCustomer'

printf "\n\n${BLUE}===================\n"
printf "|| ${NC}${RED}MUST BE ERROR${NC}${BLUE} ||\n"
printf "===================${NC}"

printf "\n\n${CYAN}[UPDATE A CUSTOMER THAT DOESN'T EXISTS]${NC} ${YELLOW}res is not defined IT'S OK${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/updateNonExistCustomer'

printf "\n\n${CYAN}[CREATE CUSTOMER WITH NO fk_user_id]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/userIdRequired'

printf "\n\n${CYAN}[CUSTOMER WITH NO email]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/emailRequired'

printf "\n\n${CYAN}[CUSTOMER WITH SAME email]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/uniqueEmail'

printf "\n\n${CYAN}[CUSTOMER WITH SAME dni]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/uniqueDni'

printf "\n\n${CYAN}[CUSTOMER WITH SAME phone]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/uniquePhone'

printf "\n\n${CYAN}[first_name EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/firstNamelengthConstraint'

printf "\n\n${CYAN}[last_name EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/lastNamelengthConstraint'

printf "\n\n${CYAN}[email EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/emailLengthConstraint'

printf "\n\n${CYAN}[dni EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/dniLengthConstraint'

printf "\n\n${CYAN}[phone_prefix EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/prefixLengthConstraint'

printf "\n\n${CYAN}[phone EXCEEDS LENGTH CONSTRAINT]${NC}\n"
curl 'http://localhost:3000/test/DB/tables/customers/phoneLengthConstraint'

printf '\n'