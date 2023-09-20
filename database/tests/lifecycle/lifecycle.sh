bash ../create_db.sh
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/lifecycle/userRegister' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/lifecycle/createCustomer' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/lifecycle/createTrip' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/lifecycle/createHost' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/lifecycle/createTransportation1' \
  -H 'accept: application/json'
printf '\n'
printf '\n'


curl -X 'GET' \
  'http://localhost:3000/test/lifecycle/createTransportation2' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/lifecycle/createActivity1' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/lifecycle/createActivity2' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/lifecycle/getInvoice' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/lifecycle/getInvoiceAmount' \
  -H 'accept: application/json'
printf '\n'
printf '\n'

curl -X 'GET' \
  'http://localhost:3000/test/lifecycle/getAmountPending' \
  -H 'accept: application/json'
printf '\n'
printf '\n'


curl -X 'GET' \
  'http://localhost:3000/test/lifecycle/getCommissionAmount' \
  -H 'accept: application/json'
printf '\n'
printf '\n'















