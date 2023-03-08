#!/bin/bash


BIBlue='\033[1;94m'  
BIGreen='\033[1;92m'
BICyan='\033[1;96m' 
BIYellow='\033[1;93m'
BIPurple='\033[1;95m'
NC='\033[0m' # No Color

echo "|-------------|"
echo "|--- START ---|"
echo "|-------------|"

echo -e "${BIBlue}Create country.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/country.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create city.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/city.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create address.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/address.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create genre.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/genre.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create author.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/author.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create book.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/book.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create book_genre.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/book_genre.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create user_account.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/user_account.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create staff.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/staff.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create library.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/library.py"
python $CSV_SCRIPT

echo -e "${BICyan}Create insert_country.sql${NC}"
bash csv_to_sql.sh "country.csv" "country/insert_country.sql" "country"

echo -e "${BICyan}Create insert_city.sql${NC}"
bash csv_to_sql.sh "city.csv" "city/insert_city.sql" "city"

echo -e "${BICyan}Create insert_address.sql${NC}"
bash csv_to_sql.sh "address.csv" "address/insert_address.sql" "address"

echo -e "${BICyan}Create insert_genre.sql${NC}"
bash csv_to_sql.sh "genre.csv" "genre/insert_genre.sql" "genre"

echo -e "${BICyan}Create insert_author.sql${NC}"
bash csv_to_sql.sh "author.csv" "author/insert_author.sql" "author"

echo -e "${BICyan}Create insert_book.sql${NC}"
bash csv_to_sql.sh "book.csv" "book/insert_book.sql" "book"

echo -e "${BICyan}Create insert_book_genre.sql${NC}"
bash csv_to_sql.sh "book_genre.csv" "book_genre/insert_book_genre.sql" "book_genre"

echo -e "${BICyan}Create insert_user_account.sql${NC}"
bash csv_to_sql.sh "user_account.csv" "user_account/insert_user_account.sql" "user_account"

echo -e "${BICyan}Create insert_staff.sql${NC}"
bash csv_to_sql.sh "staff.csv" "staff/insert_staff.sql" "staff"

echo -e "${BICyan}Create insert_library.sql${NC}"
bash csv_to_sql.sh "library.csv" "library/insert_library.sql" "library"

echo -e "${BIYellow}Insert data into database${NC}"
SEED_SCRIPT="$(cd ../ && pwd)/python/seed_db.py"
python $SEED_SCRIPT

echo -e "${BIPurple}Remove country.csv${NC}"
rm -rf "./country.csv"

echo -e "${BIPurple}Remove city.csv${NC}"
rm -rf "./city.csv"

echo -e "${BIPurple}Remove address.csv${NC}"
rm -rf "./address.csv"

echo -e "${BIPurple}Remove genre.csv${NC}"
rm -rf "./genre.csv"

echo -e "${BIPurple}Remove author.csv${NC}"
rm -rf "./author.csv"

echo -e "${BIPurple}Remove book.csv${NC}"
rm -rf "./book.csv"

echo -e "${BIPurple}Remove book_genre.csv${NC}"
rm -rf "./book_genre.csv"

echo -e "${BIPurple}Remove user_account.csv${NC}"
rm -rf "./user_account.csv"

echo -e "${BIPurple}Remove staff.csv${NC}"
rm -rf "./staff.csv"

echo -e "${BIPurple}Remove library.csv${NC}"
rm -rf "./library.csv"

echo "|-------------|"
echo "|--- DONE! ---|"
echo "|-------------|"