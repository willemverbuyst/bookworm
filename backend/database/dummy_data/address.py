import datetime
import random

import faker

fake = faker.Faker()


def create_insert_addresses_sql(config):
    print("[INFO] Creating 'insert_addresses.sql'")
    with open('insert_addresses.sql', 'w') as file:
        insert_statements = ""
        for i in config.get("ADDRESS"):
            address_id = i.get("uuid")
            address = fake.street_address().replace("'", "''")
            postal_code = fake.postcode()
            phone = fake.phone_number()
            last_updated = datetime.datetime.now() 
            city = config.get("CITY")[random.randint(0, len(config.get("CITY")) - 1)]
            city_id = city.get("uuid")
      
            sql = "INSERT INTO address (address_id,address,postal_code,phone,last_updated,city_id) " \
                f"VALUES ('{address_id}'::UUID,'{address}','{postal_code}','{phone}','{last_updated}','{city_id}'::UUID);\n"
            insert_statements += sql

        file.write(insert_statements)
