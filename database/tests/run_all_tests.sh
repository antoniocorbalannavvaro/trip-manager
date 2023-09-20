bash ./create_db.sh
bash ./tables/users.test.sh

printf "\n"
printf "RESTART DB FOR CUSTOMERS TEST"
printf "\n"
printf "======================"
printf "\n"

bash ./create_db.sh
bash ./insert_data.sh
printf "======================"
printf "\n"
bash ./tables/customers.test.sh