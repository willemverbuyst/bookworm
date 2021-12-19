#!/bin/bash
# https://github.com/pavanchhatpar/csv-to-sql-converter

file_name="$(dirname -- "$0")/books_copy.csv"

cat $file_name > tmp.csv
new_file="bookworm.sql"
table="\`book\`"

columns=$(head --lines=1 tmp.csv | sed 's/|/`,`/g' | tr -d "\"\r\n")
columns="\`$columns\`"

tail --lines=+2 tmp.csv | while read l ; do
values=$(echo $l | sed 's/|/,/g' | tr -d "\r\n")
values="$values"

echo "INSERT INTO $op($columns) VALUES ($values);"
done > "$new_file"

rm tmp.csv