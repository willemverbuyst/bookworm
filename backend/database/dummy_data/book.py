import faker
import csv
import random
import datetime
import config

fake = faker.Faker()

with open('book.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "book_id", 
      "title", 
      "year_published", 
      "replacement_cost",
      "pages",
      "last_updated",
      "language_id",
      "genre_id",
      "rental_rate_id"
    ]
    
    writer.writerow(header)
    for i in range(config.BOOK):
      writer.writerow([
        1 + i, 
        fake.sentence(nb_words=5, variable_nb_words=True)[:-1], 
        fake.year(), 
        random.randint(1, config.REPLACEMENT_COST_MAX),
        random.randint(config.PAGES_MIN, config.PAGES_MAX),
        datetime.datetime.now(),
        random.randint(1,len(config.LANGUAGES)),
        random.randint(1, len(config.GENRES)),
        random.randint(config.RENTAL_RATE_MIN, config.RENTAL_RATE_MAX),
      ])
