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

echo -e "${BIBlue}Create lanuage.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/language.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create rental_rate.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/rental_rate.py"
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

echo -e "${BIBlue}Create book_author.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/book_author.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create library.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/library.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create user_account.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/user_account.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create staff.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/staff.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create bookworm.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/bookworm.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create inventory.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/inventory.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create review.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/review.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create rental.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/rental.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create payment.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/payment.py"
python $CSV_SCRIPT

echo -e "${BICyan}Create insert_country.sql${NC}"
bash csv_to_sql.sh "country.csv" "country/insert_country.sql" "country"

echo -e "${BICyan}Create insert_city.sql${NC}"
bash csv_to_sql.sh "city.csv" "city/insert_city.sql" "city"

echo -e "${BICyan}Create insert_address.sql${NC}"
bash csv_to_sql.sh "address.csv" "address/insert_address.sql" "address"

echo -e "${BICyan}Create insert_language.sql${NC}"
bash csv_to_sql.sh "language.csv" "language/insert_language.sql" "language"

echo -e "${BICyan}Create insert_rental_rate.sql${NC}"
bash csv_to_sql.sh "rental_rate.csv" "rental_rate/insert_rental_rate.sql" "rental_rate"

echo -e "${BICyan}Create insert_genre.sql${NC}"
bash csv_to_sql.sh "genre.csv" "genre/insert_genre.sql" "genre"

echo -e "${BICyan}Create insert_author.sql${NC}"
bash csv_to_sql.sh "author.csv" "author/insert_author.sql" "author"

echo -e "${BICyan}Create insert_book.sql${NC}"
bash csv_to_sql.sh "book.csv" "book/insert_book.sql" "book"

echo -e "${BICyan}Create insert_book_author.sql${NC}"
bash csv_to_sql.sh "book_author.csv" "book_author/insert_book_author.sql" "book_author"

echo -e "${BICyan}Create insert_library.sql${NC}"
bash csv_to_sql.sh "library.csv" "library/insert_library.sql" "library"

echo -e "${BICyan}Create insert_user_account.sql${NC}"
bash csv_to_sql.sh "user_account.csv" "user_account/insert_user_account.sql" "user_account"

echo -e "${BICyan}Create insert_staff.sql${NC}"
bash csv_to_sql.sh "staff.csv" "staff/insert_staff.sql" "staff"

echo -e "${BICyan}Create insert_bookwoorm.sql${NC}"
bash csv_to_sql.sh "bookworm.csv" "bookworm/insert_bookworm.sql" "bookworm"

echo -e "${BICyan}Create insert_inventory.sql${NC}"
bash csv_to_sql.sh "inventory.csv" "inventory/insert_inventory.sql" "inventory"

echo -e "${BICyan}Create insert_review.sql${NC}"
bash csv_to_sql.sh "review.csv" "review/insert_review.sql" "review"

echo -e "${BICyan}Create insert_rental.sql${NC}"
bash csv_to_sql.sh "rental.csv" "rental/insert_rental.sql" "rental"

echo -e "${BICyan}Create insert_payment.sql${NC}"
bash csv_to_sql.sh "payment.csv" "payment/insert_payment.sql" "payment"

echo -e "${BIYellow}Insert data into database${NC}"
SEED_SCRIPT="$(cd ../ && pwd)/python/seed_db.py"
python $SEED_SCRIPT

echo "SET UP SQL FOR DEV"
rm "dev.sql"
touch "dev.sql"
echo "-- COUNTRY" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/country/create_country_table.sql" >> "dev.sql"
echo "-- CITY" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/city/create_city_table.sql" >> "dev.sql"
echo "-- ADDRESS" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/address/create_address_table.sql" >> "dev.sql"
echo "-- LANGUAGE" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/language/create_language_table.sql" >> "dev.sql"
echo "-- RENTAL_RATE" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/rental_rate/create_rental_rate_table.sql" >> "dev.sql"
echo "-- GENRE" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/genre/create_genre_table.sql" >> "dev.sql"
echo "-- AUTHOR" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/author/create_author_table.sql" >> "dev.sql"
echo "-- BOOK" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/book/create_book_table.sql" >> "dev.sql"
echo "-- BOOK_AUTHOR" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/book_author/create_book_author_table.sql" >> "dev.sql"
echo "-- LIBRARY" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/library/create_library_table.sql" >> "dev.sql"
echo "-- USER_ACCOUNT" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/user_account/create_user_account_table.sql" >> "dev.sql"
echo "-- STAFF" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/staff/create_staff_table.sql" >> "dev.sql"
echo "-- BOOKWORM" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/bookworm/create_bookworm_table.sql" >> "dev.sql"
echo "-- INVENTORY" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/inventory/create_inventory_table.sql" >> "dev.sql"
echo "-- REVIEW" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/review/create_review_table.sql" >> "dev.sql"
echo "-- RENTAL" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/rental/create_rental_table.sql" >> "dev.sql"
echo "-- PAYMENT" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/payment/create_payment_table.sql" >> "dev.sql"

echo "-- COUNTRY" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/country/insert_country.sql" >> "dev.sql"
echo "-- CITY" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/city/insert_city.sql" >> "dev.sql"
echo "-- ADDRESS" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/address/insert_address.sql" >> "dev.sql"
echo "-- LANGUAGE" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/language/insert_language.sql" >> "dev.sql"
echo "-- RENTAL_RATE" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/rental_rate/insert_rental_rate.sql" >> "dev.sql"
echo "-- GENRE" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/genre/insert_genre.sql" >> "dev.sql"
echo "-- AUTHOR" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/author/insert_author.sql" >> "dev.sql"
echo "-- BOOK" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/book/insert_book.sql" >> "dev.sql"
echo "-- BOOK_AUTHOR" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/book_author/insert_book_author.sql" >> "dev.sql"
echo "-- LIBRARY" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/library/insert_library.sql" >> "dev.sql"
echo "-- USER_ACCOUNT" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/user_account/insert_user_account.sql" >> "dev.sql"
echo "-- STAFF" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/staff/insert_staff.sql" >> "dev.sql"
echo "-- BOOKWORM" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/bookworm/insert_bookworm.sql" >> "dev.sql"
echo "-- INVENTORY" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/inventory/insert_inventory.sql" >> "dev.sql"
echo "-- REVIEW" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/review/insert_review.sql" >> "dev.sql"
echo "-- RENTAL" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/rental/insert_rental.sql" >> "dev.sql"
echo "-- PAYMENT" >> "dev.sql"
cat "$(cd ../ && pwd)/sql/payment/insert_payment.sql" >> "dev.sql"

echo -e "${BIPurple}Remove country.csv${NC}"
rm -rf "./country.csv"

echo -e "${BIPurple}Remove city.csv${NC}"
rm -rf "./city.csv"

echo -e "${BIPurple}Remove address.csv${NC}"
rm -rf "./address.csv"

echo -e "${BIPurple}Remove language.csv${NC}"
rm -rf "./language.csv"

echo -e "${BIPurple}Remove rental_rate.csv${NC}"
rm -rf "./rental_rate.csv"

echo -e "${BIPurple}Remove genre.csv${NC}"
rm -rf "./genre.csv"

echo -e "${BIPurple}Remove author.csv${NC}"
rm -rf "./author.csv"

echo -e "${BIPurple}Remove book.csv${NC}"
rm -rf "./book.csv"

echo -e "${BIPurple}Remove book_author.csv${NC}"
rm -rf "./book_author.csv"

echo -e "${BIPurple}Remove library.csv${NC}"
rm -rf "./library.csv"

echo -e "${BIPurple}Remove user_account.csv${NC}"
rm -rf "./user_account.csv"

echo -e "${BIPurple}Remove staff.csv${NC}"
rm -rf "./staff.csv"

echo -e "${BIPurple}Remove bookworm.csv${NC}"
rm -rf "./bookworm.csv"

echo -e "${BIPurple}Remove inventory.csv${NC}"
rm -rf "./inventory.csv"

echo -e "${BIPurple}Remove review.csv${NC}"
rm -rf "./review.csv"

echo -e "${BIPurple}Remove rental.csv${NC}"
rm -rf "./rental.csv"

echo -e "${BIPurple}Remove payment.csv${NC}"
rm -rf "./payment.csv"

echo "|-------------|"
echo "|--- DONE! ---|"
echo "|-------------|"