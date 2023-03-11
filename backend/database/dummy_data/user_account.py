import faker
import csv
import datetime
import random
import config

fake = faker.Faker()

with open('user_account.csv', 'w', newline='') as file:
    writer = csv.writer(file, delimiter="|", quoting=csv.QUOTE_NONNUMERIC)
    header=[
      "user_account_id",
      "first_name",
      "last_name",
      "email",
      "create_date",
      "password",
      "activebool",
      "activeint",
      "last_updated",
      "address_id"
    ]
    
    writer.writerow(header)
    for i in range (config.USER_ACCOUNT):
      writer.writerow([
        i + 1, 
        fake.first_name(), 
        fake.last_name(),
        fake.email(),
        datetime.date.today(),      
        "test123",
        fake.boolean(chance_of_getting_true=50),
        random.randint(0,1),   
        datetime.datetime.now(),
        random.randint(1,config.ADDRESS)
      ])
