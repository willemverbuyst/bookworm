import csv
import datetime
import random

with open('rental_rate.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "rental_rate_id",
      "rate",
      "last_updated"
    ]
    
    writer.writerow(header)
    for i in range (5):
      writer.writerow([
        i + 1, 
        i + 0.99,
        datetime.datetime.now(),      
      ])
