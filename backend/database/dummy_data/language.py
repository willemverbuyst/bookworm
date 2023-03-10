import csv
import datetime
import random

languages=["EN", "NL", "ES", "FR"]

with open('language.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "language_id",
      "language",
      "last_updated"
    ]
    
    writer.writerow(header)
    for i,language in enumerate(languages):
      writer.writerow([
        i + 1, 
        language,
        datetime.datetime.now(),      
      ])
