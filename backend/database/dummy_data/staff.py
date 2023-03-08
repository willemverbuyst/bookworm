import csv
import datetime
import random

with open('staff.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "staff_id",
      "user_id", 
      "last_updated"
    ]
    
    writer.writerow(header)
    for i in range (2):
      writer.writerow([
        i + 1, 
        random.randint(1,40),
        datetime.datetime.now()      
      ])
