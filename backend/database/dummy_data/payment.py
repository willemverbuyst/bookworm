import csv
import datetime
import random
import config

with open('payment.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "payment_id",
      "amount",
      "payment_date",
      "last_updated",
      "bookworm_id",
      "staff_id",
      "rental_id"
    ]
    
    writer.writerow(header)
    for i in range (config.RENTAL):
      writer.writerow([
        i + 1, 
        random.randint(config.RENTAL_RATE_MIN, config.RENTAL_RATE_MAX),
        datetime.datetime.now(),   
        datetime.datetime.now(),     
        random.randint(1, config.BOOKWORM),
        random.randint(1, config.STAFF),
        i
      ])
