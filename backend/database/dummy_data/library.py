import datetime
import random

import faker

fake = faker.Faker()


def create_dummy_libraries_sql(config):
    print("[INFO] Create dummy data for library table")
    insert_statements = ""
    for i in config.get("LIBRARY"):
        library_id = i.get("uuid")
        library_name = fake.company()
        last_updated = datetime.datetime.now()
        address_id = (config.get("ADDRESS")[random.randint(0,len(config.get("ADDRESS")) - 1)]).get("uuid")
    
        sql = "INSERT INTO library (library_id,library_name,last_updated,address_id) " \
            f"VALUES ('{library_id}'::UUID,'{library_name}','{last_updated}','{address_id}'::UUID);\n"
        insert_statements += sql

    print("[INFO] Write to 'insert_libraries.sql'")
    with open('insert_libraries.sql', 'w') as file:
        file.write(insert_statements)
