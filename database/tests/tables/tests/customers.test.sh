#! /bin/bash
bash ../../create_db.sh
bash ../../CRUD/tests/post.sh
printf "\n"
printf "########################### CUSTOMERS TEST ###########################"
printf "\n"
printf "\n"
printf "MUST BE SUCCESS:"
printf "\n"
printf "==================================="
printf "\n"
printf "[create customer]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/createCustomer' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[get all customers]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/getAllCustomers' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[get customer by id]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/getCustomerById' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[update customer]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/updateCustomer' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[delete customer]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/deleteCustomer' \
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
  'http://localhost:3000/test/tables/customers/userIdRequired' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[customer with no email]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/emailRequired' \
  -H 'accept: application/json'
printf "\n"
printf "\n"


printf "[customers with same email]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/uniqueEmail' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[customers with same dni]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/uniqueDni' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[customers with same phone]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/uniquePhone' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[first_name MAX LENGTH CONSTRAINT]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/firstNamelengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[last_name MAX LENGTH CONSTRAINT]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/lastNamelengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[email MAX LENGTH CONSTRAINT]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/emailLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[dni MAX LENGTH CONSTRAINT]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/dniLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[phone_prefix MAX LENGTH CONSTRAINT]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/prefixLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"

printf "[phone MAX LENGTH CONSTRAINT]"
printf "\n"
curl -X 'GET' \
  'http://localhost:3000/test/tables/customers/phoneLengthConstraint' \
  -H 'accept: application/json'
printf "\n"
printf "\n"


printf "==================================="
printf "\n"





