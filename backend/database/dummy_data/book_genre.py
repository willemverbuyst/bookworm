import csv
import datetime
import random

with open('book_genre.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "book_id",
      "genre_id", 
      "last_updated"
    ]
    
    writer.writerow(header)
    for i in range (100):
      writer.writerow([
        i + 1, 
        random.randint(1,34),
        datetime.datetime.now()      
      ])
