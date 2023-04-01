import datetime
import random

import faker

fake = faker.Faker()


def create_dummy_bookworms_sql(config):
    print("[INFO] Create dummy data for bookworm table")
    insert_statements = ""
    for i, bookworm in enumerate(config.get("BOOKWORM")):
        bookworm_id = bookworm.get("uuid")
        last_updated = datetime.datetime.now()
        user_account_id = (config.get("USER_ACCOUNT")[i + 2]).get("uuid")
        library_id = (config.get("LIBRARY")[random.randint(0,len(config.get("LIBRARY")) - 1)]).get("uuid")
    
        sql = "INSERT INTO bookworm (bookworm_id,last_updated,user_account_id,library_id) " \
            f"VALUES ('{bookworm_id}'::UUID,'{last_updated}','{user_account_id}'::UUID,'{library_id}'::UUID);\n"
        insert_statements += sql

    return insert_statements
    