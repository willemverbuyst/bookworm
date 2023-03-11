import csv
import datetime
import random
import config

with open('book_author.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "book_author_id",
      "last_updated",
      "book_id",
      "author_id"
    ]
    
    writer.writerow(header)
    for i in range (config.BOOK):
      writer.writerow([
        i + 1, 
        datetime.datetime.now(), 
        i + 1,
        random.randint(1, config.AUTHOR)
      ])
