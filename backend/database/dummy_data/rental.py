import datetime
import random


def create_dummy_rentals_sql(config):
    print("[INFO] Create dummy data for rental table")
    insert_statements = ""
    for i in config.get("RENTAL"):
        rental_id = i.get("uuid")
        rental_date = datetime.datetime.now()
        return_date = datetime.datetime.now()
        last_updated = datetime.datetime.now() 
        bookworm_id = (config.get("BOOKWORM")[random.randint(0,len(config.get("BOOKWORM")) - 1)]).get("uuid")
        inventory_id = (config.get("INVENTORY")[random.randint(0,len(config.get("INVENTORY")) - 1)]).get("uuid")
        staff_id = (config.get("STAFF")[random.randint(0,len(config.get("STAFF")) - 1)]).get("uuid")
  
        sql = "INSERT INTO rental (rental_id,rental_date,return_date,last_updated,bookworm_id,inventory_id,staff_id) " \
            f"VALUES ('{rental_id}'::UUID,'{rental_date}','{return_date}','{last_updated}','{bookworm_id}'::UUID,'{inventory_id}'::UUID,'{staff_id}'::UUID);\n"
        insert_statements += sql

    print("[INFO] Write to 'insert_rentals.sql'")
    with open('insert_rentals.sql', 'w') as file:
        file.write(insert_statements)
