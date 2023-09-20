#! /bin/bash
bash ../../create_db.sh
bash ../../CRUD/tests/post.sh
printf "\n"
printf "########################### USERS TEST ###########################"
printf "\n"
printf "\n"
printf "MUST BE SUCCESS:"
printf "\n"
printf "======================"
printf "\n"

printf "\n"
printf "[create user]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/createUsers' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[select all users]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/getUsers' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[select user by id]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/getUserById/2' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[update user]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/updateUser' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[delete user]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/deleteUser' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[users type contraint insert NUMERIC]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/usersTypeConstraintTryNumeric' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[users type contraint insert BOOLEAN]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/usersTypeConstraintTryBoolean' \
  -H 'accept: application/json'
printf "\n"
printf "\n"


printf "======================"
printf "\n"
printf "\n"

printf "MUST BE ERRORS:"
printf "\n"
printf "======================"
printf "\n"
printf "[update non exists user]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/updateNonExistUser' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[unique user_name]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/uniqueUserName' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[unique email]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/uniqueEmail' \
  -H 'accept: application/json'
printf "\n"


printf "\n"
printf "[unique dni]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/uniqueDni' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[create user with no user_name]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/usernameRequired' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[create user with no password]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/passwordRequired' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[create user with no email]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/emailRequired' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[user_name length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/userNameMaxLenght' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[email length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/emailMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[dni length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/dniMaxLenght' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[password length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/passwordMaxLenght' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[type enum constraint for gender]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/users/enumConstraint' \
  -H 'accept: application/json'
printf "\n"

printf "======================"
printf "\n"


