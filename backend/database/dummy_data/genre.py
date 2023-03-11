import faker
import csv
import datetime
import config


with open('genre.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "genre_id", 
      "genre",
      "last_updated"
    ]
    
    writer.writerow(header)
    for num, genre in enumerate(config.GENRES, start=1):
      writer.writerow([
        num, 
        genre,
        datetime.datetime.now()      
      ])
