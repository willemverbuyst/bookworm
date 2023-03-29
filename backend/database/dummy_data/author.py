import datetime

import faker

fake = faker.Faker()


def create_insert_authors_sql(config):
    print("[INFO] Creating 'insert_authors.sql'")
    with open('insert_authors.sql', 'w') as file:
        insert_statements = ""
        for i in config.get("AUTHOR"):
            author_id = i.get("uuid")
            first_name =  fake.first_name()
            last_name = fake.last_name()
            last_updated = datetime.datetime.now() 
      
            sql = "INSERT INTO author (author_id,first_name,last_name,last_updated) " \
                f"VALUES ('{author_id}'::UUID,'{first_name}','{last_name}','{last_updated}');\n"
            insert_statements += sql

        file.write(insert_statements)
