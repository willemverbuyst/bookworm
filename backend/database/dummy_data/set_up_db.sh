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

echo 'Creating sql for country file from csv'
bash csv_to_sql.sh "countries.csv" "country/insert_countries.sql" "country"

echo 'SEEDING THE DATABSE'

echo 'Inserting data into database'
SEED_SCRIPT="$(cd ../ && pwd)/python/seed_db.py"
python $SEED_SCRIPT

echo 'DONE'