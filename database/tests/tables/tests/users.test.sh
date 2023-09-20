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

printf "[create user]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/createUsers' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[select all users]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/getUsers' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[select user by id]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/getUserById/2' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[update user by id]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/updateUser' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[delete user by id]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/deleteUser' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[users type contraint insert NUMERIC]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/usersTypeConstraintTryNumeric' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[users type contraint insert BOOLEAN]:"
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

printf "[update non exists user]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/updateNonExistUser' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[users with same user_name]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/uniqueUserName' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[users with same email]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/uniqueEmail' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[users with same dni]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/uniqueDni' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[create user with no user_name]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/usernameRequired' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[create user with no password]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/passwordRequired' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[create user with no email]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/emailRequired' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[user_name exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/userNameMaxLenght' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[email exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/emailMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[dni exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/dniMaxLenght' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[password exceeds length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/passwordMaxLenght' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[invalid type enum for gender]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/DB/tables/users/enumConstraint' \
  -H 'accept: application/json'
printf "\n"


