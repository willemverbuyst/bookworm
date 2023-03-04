#!/bin/bash

echo 'CREATING CSV FILES'

echo 'Create csv files with dummy data'
CSV_SCRIPT="$(cd ../ && pwd)/dummy_data/main.py"
python $CSV_SCRIPT

echo 'CREAING SQL FILES'

echo 'Creating sql for books file from csv'
bash csv_to_sql.sh "books.csv" "book/insert_books.sql" "book"

echo 'Creating sql for author file from csv'
bash csv_to_sql.sh "authors.csv" "author/insert_authors.sql" "author"

echo 'Creating sql for countries file from csv'
bash csv_to_sql.sh "countries.csv" "country/insert_countries.sql" "country"

echo 'Creating sql for cities file from csv'
bash csv_to_sql.sh "cities.csv" "city/insert_cities.sql" "city"

echo 'Creating sql for addresses file from csv'
bash csv_to_sql.sh "addresses.csv" "address/insert_addresses.sql" "address"

echo 'SEEDING THE DATABSE'

echo 'Inserting data into database'
SEED_SCRIPT="$(cd ../ && pwd)/python/seed_db.py"
python $SEED_SCRIPT

echo 'CLEAN UP CSV FILES'

echo 'Removing books.csv'
rm -rf "./books.csv"

echo 'Removing authors.csv'
rm -rf "./authors.csv"

echo 'Removing countries.csv'
rm -rf "./countries.csv"

echo 'Removing cities.csv'
rm -rf "./cities.csv"

echo 'Removing address.csv'
rm -rf "./address.csv"

echo 'DONE'