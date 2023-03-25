import csv
import datetime
import random

import config

with open('staff.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "staff_id",
      "last_updated",
      "user_account_id",
      "library_id"
    ]
    
    writer.writerow(header)
    for i in range (config.STAFF):
      writer.writerow([
        i + 1, 
        datetime.datetime.now(),      
        i + 1,
        random.randint(1,config.LIBRARY)
      ])
