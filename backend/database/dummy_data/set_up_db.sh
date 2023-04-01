#!/bin/bash


echo "|-------------|"
echo "|--- START ---|"
echo "|-------------|"

SEED_SCRIPT="$(cd ../ && pwd)/dummy_data/seed_db.py"
python $SEED_SCRIPT

echo "|-------------|"
echo "|--- DONE! ---|"
echo "|-------------|"