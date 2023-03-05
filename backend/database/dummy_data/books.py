import faker
import csv
import random
import datetime
from faker.providers import DynamicProvider

fake = faker.Faker()
languages_provider = DynamicProvider(
  provider_name="language",
  elements=["EN", "NL", "ES", "FR"]
)
fake.add_provider(languages_provider)

with open('books.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "book_id", 
      "title", 
      "language", 
      "author_id", 
      "year", 
      "read",
      "last_updated"
    ]
    
    writer.writerow(header)
    for i in range(53):
      writer.writerow([
        1 + i, 
        fake.sentence(nb_words=5, variable_nb_words=True)[:-1], 
        fake.language(), 
        random.randint(1, 7), 
        fake.year(), 
        random.randint(0,1),
        datetime.datetime.now()
      ])
