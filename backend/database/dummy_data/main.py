import faker
import json
import csv
import random
from faker.providers import DynamicProvider

fake = faker.Faker()
languages_provider = DynamicProvider(
  provider_name="language",
  elements=["EN", "NL", "ES", "FR"]
)
fake.add_provider(languages_provider)


with open('authors.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "author_id", 
      "author_name", 
      "author_books_written"
    ]

    writer.writerow(header)
    for x in range(27):
      writer.writerow([
        1000 + x, 
        fake.name(), 
        random.randint(0,20)
      ])


with open('books.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "book_id", 
      "book_title", 
      "book_language", 
      "book_author", 
      "book_year", 
      "book_read"
    ]
    
    writer.writerow(header)
    for x in range(53):
      writer.writerow([
        2000 + x, 
        fake.sentence(nb_words=5, variable_nb_words=True)[:-1], 
        fake.language(), 
        fake.name(), 
        fake.year(), 
        random.randint(0,1)
      ])
    
