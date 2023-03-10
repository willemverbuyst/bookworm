import csv
import datetime
import random

with open('inventory.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "inventory_id",
      "last_updated",
      "book_id",
      "library_id"
    ]
    
    writer.writerow(header)
    for i in range (100):
      writer.writerow([
        i + 1, 
        datetime.datetime.now(), 
        i + 1,
        random.randint(1, 2)
      ])
