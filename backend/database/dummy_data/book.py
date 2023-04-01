import datetime
import random

import faker

fake = faker.Faker()


def create_insert_books_sql(config):
    print("[INFO] Creating 'insert_books.sql'")
    with open('insert_books.sql', 'w') as file:
        insert_statements = ""
        for i in config.get("BOOK"):
            book_id = i.get("uuid")
            title = fake.sentence(nb_words=5, variable_nb_words=True)[:-1]
            year_published = fake.year()
            replacement_cost =  random.randint(1, config.get("REPLACEMENT_COST_MAX"))
            pages = random.randint(config.get("PAGES_MIN"), config.get("PAGES_MAX"))
            last_updated = datetime.datetime.now() 
            language_id = (config.get("LANGUAGE")[random.randint(0,len(config.get("LANGUAGE")) - 1)]).get("uuid")
            genre_id = (config.get("GENRE")[random.randint(0,len(config.get("GENRE")) - 1)]).get("uuid")
            rental_rate_id = (config.get("RENTAL_RATE")[random.randint(0,len(config.get("RENTAL_RATE")) - 1)]).get("uuid")
      
            sql = "INSERT INTO book (book_id,title,year_published,replacement_cost,pages,last_updated,language_id,genre_id,rental_rate_id) " \
                f"VALUES ('{book_id}'::UUID,'{title}','{year_published}',{replacement_cost},{pages},'{last_updated}','{language_id}'::UUID,'{genre_id}'::UUID,'{rental_rate_id}'::UUID);\n"
            insert_statements += sql

        file.write(insert_statements)
