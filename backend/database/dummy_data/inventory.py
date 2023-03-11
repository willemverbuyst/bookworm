import csv
import datetime
import random
import config


with open('inventory.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "inventory_id",
      "last_updated",
      "book_id",
      "library_id"
    ]
    
    writer.writerow(header)
    for i in range (config.INVENTORY):
      writer.writerow([
        i + 1, 
        datetime.datetime.now(), 
        config.BOOK,
        random.randint(1, config.LIBRARY)
      ])
