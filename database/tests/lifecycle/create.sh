bash ../create_db.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/createCycle/userRegister' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/createCycle/createCustomer' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/createCycle/createTrip' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/createCycle/createHost' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/createCycle/createTransportation1' \
  -H 'accept: application/json'
printf '\n'
printf '\n'


curl -X 'GET' \
  'http://localhost:3000/test/createCycle/createTransportation2' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/createCycle/createActivity1' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/createCycle/createActivity2' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/createCycle/getInvoice' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/createCycle/getInvoiceAmount' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/createCycle/getAmountPending' \
  -H 'accept: application/json'
printf '\n'
printf '\n'


curl -X 'GET' \
  'http://localhost:3000/test/createCycle/getCommissionAmount' \
  -H 'accept: application/json'
printf '\n'
printf '\n'















