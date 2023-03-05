#!/bin/bash


BIBlue='\033[1;94m'  
BIGreen='\033[1;92m'
BICyan='\033[1;96m' 
BIYellow='\033[1;93m'
BIPurple='\033[1;95m'
NC='\033[0m' # No Color

echo "-------------"
echo "--- START ---"

echo -e "${BIBlue}Create csv files with dummy data${NC}"
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/main.py"
python $CSV_SCRIPT

echo -e "${BICyan}Create sql for books file from csv${NC}"
bash csv_to_sql.sh "books.csv" "book/insert_books.sql" "book"

echo -e "${BICyan}Create sql for author file from csv${NC}"
bash csv_to_sql.sh "authors.csv" "author/insert_authors.sql" "author"

echo -e "${BICyan}Create sql for countries file from csv${NC}"
bash csv_to_sql.sh "countries.csv" "country/insert_countries.sql" "country"

echo -e "${BICyan}Create sql for cities file from csv${NC}"
bash csv_to_sql.sh "cities.csv" "city/insert_cities.sql" "city"

echo -e "${BICyan}Create sql for addresses file from csv${NC}"
bash csv_to_sql.sh "addresses.csv" "address/insert_addresses.sql" "address"

echo -e "${BIYellow}Insert data into database${NC}"
SEED_SCRIPT="$(cd ../ && pwd)/python/seed_db.py"
python $SEED_SCRIPT

echo -e "${BIPurple}Remove books.csv${NC}"
rm -rf "./books.csv"

echo -e "${BIPurple}Remove authors.csv${NC}"
rm -rf "./authors.csv"

echo -e "${BIPurple}Remove countries.csv${NC}"
rm -rf "./countries.csv"

echo -e "${BIPurple}Remove cities.csv${NC}"
rm -rf "./cities.csv"

echo -e "${BIPurple}Remove addresses.csv${NC}"
rm -rf "./addresses.csv"

echo "--- DONE! ---"
echo "-------------"