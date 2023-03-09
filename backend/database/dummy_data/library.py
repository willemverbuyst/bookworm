import faker
import csv
import datetime
import random

fake = faker.Faker()

with open('library.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "library_id",
      "library_name", 
      "last_updated",
      "address_id"
    ]
    
    writer.writerow(header)
    for i in range (2):
      writer.writerow([
        i + 1, 
        fake.company(),
        datetime.datetime.now(),    
        random.randint(1,50)
      ])
