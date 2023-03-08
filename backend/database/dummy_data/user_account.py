import faker
import csv
import datetime
import random

fake = faker.Faker()

with open('user_account.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "user_account_id",
      "library_id", 
      "first_name",
      "last_name",
      "email",
      "address_id",
      "create_date",
      "last_updated",
      "password",
      "activebool",
      "activeint"
    ]
    
    writer.writerow(header)
    for i in range (40):
      writer.writerow([
        i + 1, 
        random.randint(1,2),
        fake.first_name(), 
        fake.last_name(),
        fake.email(),
        random.randint(1,40),
        datetime.date.today(),      
        datetime.datetime.now(),
        "test123",
        fake.boolean(chance_of_getting_true=50),
        random.randint(0,1)   
      ])
