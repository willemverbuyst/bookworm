import csv
import datetime
import random

with open('library.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "library_id",
      "staff_id", 
      "address_id",
      "last_updated"
    ]
    
    writer.writerow(header)
    for i in range (2):
      writer.writerow([
        i + 1, 
        random.randint(1,2),
        random.randint(1,50),
        datetime.datetime.now()      
      ])
