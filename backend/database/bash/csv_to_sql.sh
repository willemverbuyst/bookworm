#!/bin/bash

# Based on: https://github.com/pavanchhatpar/csv-to-sql-converter

# # from scripts navigate to bash directory
# cd database/bash

# Get file, in same directory
file_name="$(cd ../ && pwd)/dummy_data/books.csv"

# Create temp file
cat $file_name > tmp.csv

# New file name
new_file="$(cd ../ && pwd)/dummy_data/insert_books.sql"

# Name of table
table="book"

# COLUMN NAMES
# Replace pipe with comma
# Delete quotes and newline
columns=$(head --lines=1 tmp.csv | sed 's/|/,/g' | tr -d "\"\r\n")

# Add column for id
columns="$columns"

# VALUES
# Loop through lines in temp csv, last line needs terminating linefeed!
# Replace pipe with comma
# Delete newline
tail --lines=+2 tmp.csv | while read l ; do
values=$(echo $l | sed 's/|/,/g' | tr -d "\r\n")

echo "INSERT INTO $table($columns) VALUES ($values);"
done > $new_file

sed -i "s/\"/'/g" $new_file

# Remove temp file
rm tmp.csv