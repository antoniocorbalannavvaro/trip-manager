bash ../create_db.sh
printf '\n'
bash post.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/deleteCycle/deleteUser' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

bash ../create_db.sh
printf '\n'
bash post.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/deleteCycle/deleteCustomer' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

bash ../create_db.sh
printf '\n'
bash post.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/deleteCycle/deleteTrip' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

bash ../create_db.sh
printf '\n'
bash post.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/deleteCycle/deleteHost' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

bash ../create_db.sh
printf '\n'
bash post.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/deleteCycle/deleteTransportation' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

bash ../create_db.sh
printf '\n'
bash post.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/deleteCycle/deleteActivity' \
  -H 'accept: application/json'
printf '\n'
printf '\n'





