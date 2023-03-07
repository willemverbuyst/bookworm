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

echo -e "${BIBlue}Create countries.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/countries.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create cities.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/cities.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create addresses.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/addresses.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create genres.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/genres.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create authors.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/authors.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create books.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/books.py"
python $CSV_SCRIPT

echo -e "${BIBlue}Create book_genre.csv${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/book_genre.py"
python $CSV_SCRIPT

echo -e "${BICyan}Create insert_countries.sql${NC}"
bash csv_to_sql.sh "countries.csv" "country/insert_countries.sql" "country"

echo -e "${BICyan}Create insert_cities.sql${NC}"
bash csv_to_sql.sh "cities.csv" "city/insert_cities.sql" "city"

echo -e "${BICyan}Create insert_addresses.sql${NC}"
bash csv_to_sql.sh "addresses.csv" "address/insert_addresses.sql" "address"

echo -e "${BICyan}Create insert_genres.sql${NC}"
bash csv_to_sql.sh "genres.csv" "genre/insert_genres.sql" "genre"

echo -e "${BICyan}Create insert_authors.sql${NC}"
bash csv_to_sql.sh "authors.csv" "author/insert_authors.sql" "author"

echo -e "${BICyan}Create insert_books.sql${NC}"
bash csv_to_sql.sh "books.csv" "book/insert_books.sql" "book"

echo -e "${BICyan}Create insert_book_genre.sql${NC}"
bash csv_to_sql.sh "book_genre.csv" "book_genre/insert_book_genre.sql" "book_genre"

echo -e "${BIYellow}Insert data into database${NC}"
SEED_SCRIPT="$(cd ../ && pwd)/python/seed_db.py"
python $SEED_SCRIPT

echo -e "${BIPurple}Remove countries.csv${NC}"
rm -rf "./countries.csv"

echo -e "${BIPurple}Remove cities.csv${NC}"
rm -rf "./cities.csv"

echo -e "${BIPurple}Remove addresses.csv${NC}"
rm -rf "./addresses.csv"

echo -e "${BIPurple}Remove genres.csv${NC}"
rm -rf "./genres.csv"

echo -e "${BIPurple}Remove authors.csv${NC}"
rm -rf "./authors.csv"

echo -e "${BIPurple}Remove books.csv${NC}"
rm -rf "./books.csv"

echo -e "${BIPurple}Remove book_genre.csv${NC}"
rm -rf "./book_genre.csv"

echo "|-------------|"
echo "|--- DONE! ---|"
echo "|-------------|"