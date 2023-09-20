#! /bin/bash
bash ../../create_db.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/userRegister' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/createCustomer' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/createTrip' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/createHost' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/createTransportation1' \
  -H 'accept: application/json'
printf '\n'
printf '\n'


curl -X 'GET' \
  'http://localhost:3000/test/crud/createTransportation2' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/createActivity1' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/createActivity2' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/getInvoice' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/getInvoiceAmount' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/crud/getAmountPending' \
  -H 'accept: application/json'
printf '\n'
printf '\n'


curl -X 'GET' \
  'http://localhost:3000/test/crud/getCommissionAmount' \
  -H 'accept: application/json'
printf '\n'
printf '\n'















