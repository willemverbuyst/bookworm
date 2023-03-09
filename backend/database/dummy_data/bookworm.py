import csv
import datetime
import random

with open('bookworm.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "bookworm_id",
      "last_updated"
      "user_account_id",
      "library_id"
    ]
    
    writer.writerow(header)
    for i in range (2):
      writer.writerow([
        i + 1, 
        datetime.datetime.now(),      
        random.randint(1,40),
        random.randint(1,2)
      ])
