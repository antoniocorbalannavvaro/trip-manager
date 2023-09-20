#! /bin/bash
#------------------------------------------
# DESCOMENTAR PARA HACER TEST POR SEPARADO:
# bash ../../create_db.sh
#------------------------------------------

#------------------------------------------
# COMENTAR PARA HACER TEST POR SEPARADO:
bash ./create_db.sh
#------------------------------------------

curl -X 'GET' \
  'http://localhost:3000/test/crud/postData' \
  -H 'accept: application/json'