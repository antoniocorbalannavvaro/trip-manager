curl \
  'http://localhost:3000/auth/signup' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
    "userName": "100", 
    "email": "100", 
    "password": "100"
  }'
