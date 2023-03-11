import faker
import csv
import random
import datetime
import config
from faker.providers import DynamicProvider

fake = faker.Faker()

with open('city.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "city_id", 
      "city", 
      "last_updated",
      "country_id",
    ]
    
    writer.writerow(header)
    for i in range(config.CITY):
      writer.writerow([
        1 + i, 
        fake.city(),
        datetime.datetime.now(),
        random.randint(1,config.COUNTRY)
      ])