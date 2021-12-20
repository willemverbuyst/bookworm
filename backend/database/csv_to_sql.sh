#!/bin/bash

# Based on: https://github.com/pavanchhatpar/csv-to-sql-converter

# Get file, in same directory
file_name="$(dirname -- "$0")/books_copy.csv"

# Create temp file
cat $file_name > tmp.csv

# New file name
new_file="bookworm.sql"

# Name of table in backticks
table="\`book\`"

# COLUMN NAMES
# Replace pipe with backtick comma backtick 
# Delete quotes and newline
columns=$(head --lines=1 tmp.csv | sed 's/|/`,`/g' | tr -d "\"\r\n")

# Add first and last backtick
columns="\`$columns\`"

# VALUES
# Loop through lines in temp csv, last line needs terminating linefeed!
# Replace pipe with comma
# Delete newline
tail --lines=+2 tmp.csv | while read l ; do
values=$(echo $l | sed 's/|/,/g' | tr -d "\r\n")

echo "INSERT INTO $table($columns) VALUES ($values);"
done > $new_file

# Remove temp file
rm tmp.csv