import faker
import csv
import datetime
from faker.providers import DynamicProvider

fake = faker.Faker()

with open('countries.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "country_id", 
      "country", 
      "last_updated"
    ]
    
    writer.writerow(header)
    for i in range(5):
      writer.writerow([
        1 + i, 
        fake.country(),
        datetime.datetime.now()
      ])
