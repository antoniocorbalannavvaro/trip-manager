curl -X 'GET' \
  'http://localhost:3000/test/cleanDB' \
  -H 'accept: application/json'

printf "\n"

curl -X 'GET' \
  'http://localhost:3000/test/createTables' \
  -H 'accept: application/json'

printf "\n"