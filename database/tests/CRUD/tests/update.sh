#! /bin/bash
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'
printf "${BLUE}====================="
printf "\n"
printf "|| ${NC}${GREEN}MUST BE SUCCESS${NC}${BLUE} ||"
printf "\n"
printf "=====================${NC}"
printf "\n"
printf "\n"
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

printf "[UPDATE USER]"
printf "\n"
printf "before: "
curl -s http://localhost:3000/test/DB/tables/users/getUserById/1 | jq -r '.result[0].user_name'

curl -X 'GET' \
  'http://localhost:3000/test/DB/crud/updateUser/1' \
  -H 'accept: application/json'
printf "\n"

printf "after: "
curl -s http://localhost:3000/test/DB/tables/users/getUserById/1 | jq -r '.result[0].user_name'
