import faker
import csv
import random
import datetime
import config
from faker.providers import DynamicProvider

fake = faker.Faker()

with open('address.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "address_id", 
      "address", 
      "postal_code",
      "phone",
      "last_updated",
      "city_id"
    ]
    
    writer.writerow(header)
    for i in range(config.ADDRESS):
      writer.writerow([
        1 + i, 
        fake.street_address(),
        fake.postcode(),
        fake.phone_number(),
        datetime.datetime.now(),
        random.randint(1,config.CITY)
      ])