import csv
import datetime
import random
import config


with open('bookworm.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "bookworm_id",
      "last_updated",
      "user_account_id",
      "library_id"
    ]
    
    writer.writerow(header)
    for i in range (config.BOOKWORM):
      writer.writerow([
        i + 1, 
        datetime.datetime.now(),      
        random.randint(1,config.USER_ACCOUNT),
        random.randint(1,config.LIBRARY)
      ])
