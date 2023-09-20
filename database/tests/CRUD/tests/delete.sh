bash ../../create_db.sh
printf '\n'
bash post.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/deleteUser' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

bash ../../create_db.sh
printf '\n'
bash post.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/deleteCustomer' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

bash ../../create_db.sh
printf '\n'
bash post.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/deleteTrip' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

bash ../../create_db.sh
printf '\n'
bash post.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/deleteHost' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

bash ../../create_db.sh
printf '\n'
bash post.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/deleteTransportation' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

bash ../../create_db.sh
printf '\n'
bash post.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/deleteActivity' \
  -H 'accept: application/json'
printf '\n'
printf '\n'





