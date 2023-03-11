import faker
import csv
import datetime
import random
import config

fake =faker.Faker()


with open('review.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "review_id",
      "description",
      "rating",
      "startdate",
      "enddate",
      "duration",
      "last_updated",
      "book_id",
      "bookworm_id"
    ]
    
    writer.writerow(header)
    for i in range (config.REVIEW):
      startdate =datetime.datetime.strptime(fake.date(),"%Y-%m-%d")
      duration = random.randint(1,365)
      enddate = startdate + datetime.timedelta(days=duration)

      writer.writerow([
        i + 1, 
        fake.paragraph(nb_sentences=5),
        random.randint(config.RATING_MIN, config.RATING_MAX),
        startdate,
        enddate,
        duration,
        datetime.datetime.now(), 
        random.randint(1, config.BOOK),
        random.randint(1, 2)
      ])
