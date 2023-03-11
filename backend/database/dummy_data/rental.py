import csv
import datetime
import random
import config

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
    for i in range (config.RENTAL):
      writer.writerow([
        i + 1, 
        datetime.datetime.now(),   
        datetime.datetime.now(),   
        datetime.datetime.now(),   
        random.randint(1, config.BOOKWORM),
        random.randint(1, config.INVENTORY),
        random.randint(1, config.STAFF)
      ])
