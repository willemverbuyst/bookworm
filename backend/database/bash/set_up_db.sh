#!/bin/bash

echo '1. Creating sql for books file from csv'
bash csv_to_sql.sh "books.csv" "insert_books.sql" "book"

echo '2. Creating sql for author file from csv'
# authors.csv insert_authors.sql author
bash csv_to_sql.sh "authors.csv" "insert_authors.sql" "author"

echo '3. Inserting data into database'
SEED_SCRIPT="$(cd ../ && pwd)/python/seed_db.py"
python $SEED_SCRIPT

echo '4. Done!'