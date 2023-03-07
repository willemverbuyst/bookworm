import faker
import csv
import random
import datetime
from faker.providers import DynamicProvider

fake = faker.Faker()

with open('address.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "address_id", 
      "address", 
      "city_id",
      "postal_code",
      "phone",
      "last_updated"
    ]
    
    writer.writerow(header)
    for i in range(40):
      writer.writerow([
        1 + i, 
        fake.street_address(),
        random.randint(1,20),
        fake.postcode(),
        fake.phone_number(),
        datetime.datetime.now()
      ])