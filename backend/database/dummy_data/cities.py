import faker
import csv
import random
import datetime
from faker.providers import DynamicProvider

fake = faker.Faker()

with open('cities.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "city_id", 
      "city", 
      "country_id",
      "last_updated"
    ]
    
    writer.writerow(header)
    for i in range(20):
      writer.writerow([
        1 + i, 
        fake.city(),
        random.randint(1,5),
        datetime.datetime.now()
      ])