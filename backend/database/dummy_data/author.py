import datetime

import faker

fake = faker.Faker()


def create_dummy_authors_sql(config):
    print("[INFO] Create dummy data for author table")
    insert_statements = ""
    for i in config.get("AUTHOR"):
        author_id = i.get("uuid")
        first_name =  fake.first_name()
        last_name = fake.last_name()
        last_updated = datetime.datetime.now() 
    
        sql = "INSERT INTO author (author_id,first_name,last_name,last_updated) " \
            f"VALUES ('{author_id}'::UUID,'{first_name}','{last_name}','{last_updated}');\n"
        insert_statements += sql

    return insert_statements
