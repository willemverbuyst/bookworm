import datetime
import random

import faker

fake = faker.Faker()


def create_dummy_staff_sql(config):
    print("[INFO] Create dummy data for staff table")
    insert_statements = ""
    for i, staff in enumerate(config.get("STAFF")):
        staff_id = staff.get("uuid")
        last_updated = datetime.datetime.now()
        user_account_id = (config.get("USER_ACCOUNT")[i]).get("uuid")
        library_id = (config.get("LIBRARY")[random.randint(0,len(config.get("LIBRARY")) - 1)]).get("uuid")
    
        sql = "INSERT INTO staff (staff_id,last_updated,user_account_id,library_id) " \
            f"VALUES ('{staff_id}'::UUID,'{last_updated}','{user_account_id}'::UUID,'{library_id}'::UUID);\n"
        insert_statements += sql

    return insert_statements