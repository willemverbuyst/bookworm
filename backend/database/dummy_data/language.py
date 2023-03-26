import csv
import datetime
import random

import config

with open('language.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "language_id",
      "language",
      "last_updated"
    ]
    
    writer.writerow(header)
    for i in range(len(config.LANGUAGES)):
      writer.writerow([
        str(config.UUIDS_LANGUAGES[i]),
        config.LANGUAGES[i],
        datetime.datetime.now(),      
      ])
