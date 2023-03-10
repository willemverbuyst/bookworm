import faker
import csv
import random
import datetime

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
    for i in range(100):
      writer.writerow([
        1 + i, 
        fake.sentence(nb_words=5, variable_nb_words=True)[:-1], 
        fake.year(), 
        random.randint(1, 9),
        random.randint(50, 400),
        datetime.datetime.now(),
        random.randint(1,4),
        random.randint(1, 34),
        random.randint(1, 5),
      ])
