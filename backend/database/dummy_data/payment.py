import csv
import datetime
import random

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
    for i in range (80):
      writer.writerow([
        i + 1, 
        random.randint(0, 4) + 0.99,
        datetime.datetime.now(),   
        datetime.datetime.now(),     
        random.randint(1,2),
        random.randint(1,2),
        i
      ])
