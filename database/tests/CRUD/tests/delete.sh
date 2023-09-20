#! /bin/bash
#------------------------------------------
# COMENTAR PARA HACER TEST POR SEPARADO:
bash ./CRUD/tests/post.sh
printf '\n'
#------------------------------------------

#------------------------------------------
# DESCOMENTAR PARA HACER TEST POR SEPARADO:
# printf '\n'
# bash post.sh
# printf '\n'
#------------------------------------------

printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/crud/deleteUser' \
  -H 'accept: application/json'
printf '\n'

#------------------------------------------
# COMENTAR PARA HACER TEST POR SEPARADO:
printf '\n'
bash ./CRUD/tests/post.sh
printf '\n'
#------------------------------------------

#------------------------------------------
# DESCOMENTAR PARA HACER TEST POR SEPARADO:
# printf '\n'
# bash post.sh
# printf '\n'
#------------------------------------------

printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/crud/deleteCustomer' \
  -H 'accept: application/json'
printf '\n'

#------------------------------------------
# COMENTAR PARA HACER TEST POR SEPARADO:
printf '\n'
bash ./CRUD/tests/post.sh
printf '\n'
#------------------------------------------

#------------------------------------------
# DESCOMENTAR PARA HACER TEST POR SEPARADO:
# printf '\n'
# bash post.sh
# printf '\n'
#------------------------------------------

printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/crud/deleteTrip' \
  -H 'accept: application/json'
printf '\n'

#------------------------------------------
# COMENTAR PARA HACER TEST POR SEPARADO:
printf '\n'
bash ./CRUD/tests/post.sh
printf '\n'
#------------------------------------------

#------------------------------------------
# DESCOMENTAR PARA HACER TEST POR SEPARADO:
# printf '\n'
# bash post.sh
# printf '\n'
#------------------------------------------

printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/crud/deleteHost' \
  -H 'accept: application/json'
printf '\n'

#------------------------------------------
# COMENTAR PARA HACER TEST POR SEPARADO:
printf '\n'
bash ./CRUD/tests/post.sh
printf '\n'
#------------------------------------------

#------------------------------------------
# DESCOMENTAR PARA HACER TEST POR SEPARADO:
# printf '\n'
# bash post.sh
# printf '\n'
#------------------------------------------

printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/crud/deleteTransportation' \
  -H 'accept: application/json'
printf '\n'

#------------------------------------------
# COMENTAR PARA HACER TEST POR SEPARADO:
printf '\n'
bash ./CRUD/tests/post.sh
printf '\n'
#------------------------------------------

#------------------------------------------
# DESCOMENTAR PARA HACER TEST POR SEPARADO:
# printf '\n'
# bash post.sh
# printf '\n'
#------------------------------------------

printf '\n'
curl -X 'GET' \
  'http://localhost:3000/test/crud/deleteActivity' \
  -H 'accept: application/json'
