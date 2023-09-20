#! /bin/bash
bash ../../create_db.sh
bash post.sh
printf "\n"
printf "\n"

printf "[UPDATE USER]"
printf "\n"
printf "before: "
curl -s http://localhost:3000/test/tables/users/getUserById/1 | jq -r '.result[0].user_name'

curl -X 'GET' \
  'http://localhost:3000/test/crud/updateUser/1' \
  -H 'accept: application/json'
printf "\n"

printf "after: "
curl -s http://localhost:3000/test/tables/users/getUserById/1 | jq -r '.result[0].user_name'
