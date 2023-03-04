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


# with open('authors.csv', 'w', newline='') as file:
#     writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
#     header=[
#       "author_id", 
#       "author_name", 
#     ]

#     writer.writerow(header)
#     for x in range(7):
#       writer.writerow([
#         1000 + x, 
#         fake.name(), 
#       ])


# with open('books.csv', 'w', newline='') as file:
#     writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
#     header=[
#       "book_id", 
#       "book_title", 
#       "book_language", 
#       "book_author_id", 
#       "book_year", 
#       "book_read"
#     ]
    
#     writer.writerow(header)
#     for x in range(53):
#       writer.writerow([
#         2000 + x, 
#         fake.sentence(nb_words=5, variable_nb_words=True)[:-1], 
#         fake.language(), 
#         1000 + random.randint(1, 7), 
#         fake.year(), 
#         random.randint(0,1)
#       ])

    
print(fake.profile())