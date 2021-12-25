#!/bin/bash

# from scripts navigate to bash directory
# cd database/bash

echo '1. Creating sql file from csv'
bash csv_to_sql.sh

echo '2. Inserting data into database'
seed_script="$(cd ../ && pwd)/seed_db.py"
python $seed_script

echo '3. Done!'