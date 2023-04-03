import datetime
import random

import faker

fake = faker.Faker()


def create_dummy_rentals_sql(config):
    print("[INFO] Create dummy data for rental table")
    insert_statements = ""
    for index, i in enumerate(config.get("RENTAL")):
        rental_id = i.get("uuid")
        rental_date_current = fake.date_between("-21d")
        rental_date = fake.date_between("-3y")
        return_date = rental_date + datetime.timedelta(days=random.randint(1, 21))
        last_updated = datetime.datetime.now() 
        bookworm_id = (config.get("BOOKWORM")[random.randint(0,len(config.get("BOOKWORM")) - 1)]).get("uuid")
        inventory_id = (config.get("INVENTORY")[random.randint(0,len(config.get("INVENTORY")) - 1)]).get("uuid")
        staff_id = (config.get("STAFF")[random.randint(0,len(config.get("STAFF")) - 1)]).get("uuid")

        if index < 100:
            sql = "INSERT INTO rental (rental_id,rental_date,return_date,last_updated,bookworm_id,inventory_id,staff_id) " \
                f"VALUES ('{rental_id}'::UUID,'{rental_date_current}',NULL,'{last_updated}','{bookworm_id}'::UUID,'{inventory_id}'::UUID,'{staff_id}'::UUID);\n"
            insert_statements += sql
        else:
            sql = "INSERT INTO rental (rental_id,rental_date,return_date,last_updated,bookworm_id,inventory_id,staff_id) " \
                f"VALUES ('{rental_id}'::UUID,'{rental_date}','{return_date}','{last_updated}','{bookworm_id}'::UUID,'{inventory_id}'::UUID,'{staff_id}'::UUID);\n"
            insert_statements += sql

    return insert_statements