#! /bin/bash
bash ../../create_db.sh

curl -X 'GET' \
  'http://localhost:3000/test/crud/postData' \
  -H 'accept: application/json'
  
printf "\n"