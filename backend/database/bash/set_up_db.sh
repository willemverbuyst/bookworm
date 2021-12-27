#!/bin/bash

echo '1. Creating sql file from csv'
bash csv_to_sql.sh

echo '2. Inserting data into database'
SEED_SCRIPT="$(cd ../ && pwd)/python/seed_db.py"
python $SEED_SCRIPT

echo '3. Done!'