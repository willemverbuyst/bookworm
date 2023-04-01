import datetime
import random

import faker

fake = faker.Faker()


def create_insert_reviews_sql(config):
    print("[INFO] Creating dummy data for inserting reviews")
    insert_statements = ""
    for i in config.get("REVIEW"):
        review_id = i.get("uuid")
        description = fake.paragraph(nb_sentences=5)
        rating =  random.randint(config.get("RATING_MIN"), config.get("RATING_MAX"))
        startdate =datetime.datetime.strptime(fake.date(),"%Y-%m-%d")
        duration = random.randint(1,365)
        enddate = startdate + datetime.timedelta(days=duration)
        last_updated = datetime.datetime.now() 
        book_id = (config.get("BOOK")[random.randint(0,len(config.get("BOOK")) - 1)]).get("uuid")
        bookworm_id = (config.get("BOOKWORM")[random.randint(0,len(config.get("BOOKWORM")) - 1)]).get("uuid")
  
        sql = "INSERT INTO review (review_id,description,rating,startdate,enddate,duration,last_updated,book_id,bookworm_id) " \
            f"VALUES ('{review_id}'::UUID,'{description}','{rating}','{startdate}','{enddate}','{duration}','{last_updated}','{book_id}'::UUID,'{bookworm_id}'::UUID);\n"
        insert_statements += sql

    print("[INFO] Writing to 'insert_reviews.sql'")
    with open('insert_reviews.sql', 'w') as file:
        file.write(insert_statements)
