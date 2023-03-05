import faker
import csv
import datetime
from faker.providers import DynamicProvider

fake = faker.Faker()

with open('authors.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "author_id", 
      "first_name",
      "last_name", 
      "last_updated"
    ]

    writer.writerow(header)
    for i in range(7):
      writer.writerow([
        1 + i, 
        fake.first_name(), 
        fake.last_name(),
        datetime.datetime.now()
      ])