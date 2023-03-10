import csv
import datetime
import random

with open('rental.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "rental_id",
      "rental_date",
      "return_date",
      "last_updated",
      "bookworm_id",
      "inventory_id",
      "staff_id"
    ]
    
    writer.writerow(header)
    for i in range (80):
      writer.writerow([
        i + 1, 
        datetime.datetime.now(),   
        datetime.datetime.now(),   
        datetime.datetime.now(),   
        random.randint(1,2),
        random.randint(1, 100),
        random.randint(1,2)
      ])
