import faker
import csv
import datetime
import config
from faker.providers import DynamicProvider

fake = faker.Faker()

with open('country.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "country_id", 
      "country", 
      "last_updated"
    ]
    
    writer.writerow(header)
    for i in range(config.COUNTRY):
      writer.writerow([
        1 + i, 
        fake.country(),
        datetime.datetime.now()
      ])
