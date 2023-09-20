printf "\n"
printf "########################### CUSTOMERS TEST ###########################"
printf "\n"
printf "\n"
printf "MUST BE SUCCESS:"
printf "\n"
printf "==================================="
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/customers/createCustomer' \
  -H 'accept: application/json'
printf "\n"

curl -X 'GET' \
  'http://localhost:3000/test/customers/getAllCustomers' \
  -H 'accept: application/json'
printf "\n"

curl -X 'GET' \
  'http://localhost:3000/test/customers/getCustomerById' \
  -H 'accept: application/json'
printf "\n"

curl -X 'GET' \
  'http://localhost:3000/test/customers/updateCustomer' \
  -H 'accept: application/json'
printf "\n"

curl -X 'GET' \
  'http://localhost:3000/test/customers/deleteCustomer' \
  -H 'accept: application/json'
printf "\n"

curl -X 'GET' \
  'http://localhost:3000/test/customers/getCustomerById' \
  -H 'accept: application/json'
printf "\n"

curl -X 'GET' \
  'http://localhost:3000/test/customers/updateCustomer' \
  -H 'accept: application/json'
printf "\n"
printf "==================================="


printf "\n"
printf "\n"
printf "MUST BE ERROR:"
printf "\n"
printf "==================================="


printf "\n"

printf "[create customer with no fk_user_id]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/customers/createCustomerWithNoUserRef' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[customer with no email]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/customers/emailRequired' \
  -H 'accept: application/json'
printf "\n"
printf "\n"


printf "[customers with same email]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/customers/uniqueEmail' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[customers with same dni]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/customers/uniqueDni' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[customers with same phone]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/customers/uniquePhone' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[first_name MAX LENGTH CONSTRAINT]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/customers/firstNamelengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[last_name MAX LENGTH CONSTRAINT]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/customers/lastNamelengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[email MAX LENGTH CONSTRAINT]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/customers/emailLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[dni MAX LENGTH CONSTRAINT]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/customers/dniLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[phone_prefix MAX LENGTH CONSTRAINT]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/customers/prefixLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[phone MAX LENGTH CONSTRAINT]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/customers/phoneLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"


printf "==================================="
printf "\n"





