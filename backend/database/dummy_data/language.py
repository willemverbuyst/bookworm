import faker
import csv
import datetime
import random

fake = faker.Faker()
languages_provider = DynamicProvider(
  provider_name="language",
  elements=["EN", "NL", "ES", "FR"]
)
fake.add_provider(languages_provider)

with open('language.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "language_id",
      "language",
      "last_updated"
    ]
    
    writer.writerow(header)
    for i in range (2):
      writer.writerow([
        i + 1, 
        fake.language(), 
        datetime.datetime.now(),      
      ])
