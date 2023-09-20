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
  'http://localhost:3000/test/users/createUsers' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[select all users]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/getUsers' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[select user by id]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/getUserById' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[update user]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/updateUser' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[delete user]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/deleteUser' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[users type contraint 1]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/usersTypeConstraint1' \
  -H 'accept: application/json'
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/usersTypeConstraint3' \
  -H 'accept: application/json'
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/usersTypeConstraint2' \
  -H 'accept: application/json'
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
  'http://localhost:3000/test/users/updateNonExistUser' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[unique user_name]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/uniqueUserName' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[unique email]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/uniqueEmail' \
  -H 'accept: application/json'
printf "\n"


printf "\n"
printf "[unique dni]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/uniqueDni' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[create user with no user_name]:"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/usernameRequired' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[create user with no password]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/passwordRequired' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[create user with no email]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/emailRequired' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[user_name length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/userNameMaxLenght' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[email length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/emailMaxLenght' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[dni length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/dniMaxLenght' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[password length constraint]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/passwordMaxLenght' \
  -H 'accept: application/json'
printf "\n"

printf "\n"
printf "[type enum constraint for gender]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/users/enumConstraint' \
  -H 'accept: application/json'
printf "\n"

printf "======================"
printf "\n"


