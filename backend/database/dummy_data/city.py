import csv
import datetime
import random

import config
import faker

fake = faker.Faker()


def create_insert_cities_sql(config):
    print("[INFO] Creating 'insert_cities.sql'")
    with open('insert_cities.sql', 'w') as file:
        insert_statements = ""
        for i in config.get("CITY"):
            city_id = i.get("uuid")
            city = fake.city().replace("'", "''")
            last_updated = datetime.datetime.now()
            country = config.get("COUNTRY")[random.randint(0, len(config.get("COUNTRY")) - 1)]
            country_id = country.get("uuid")
      
            sql = "INSERT INTO city (city_id,city,last_updated,country_id)" \
                f"VALUES ('{city_id}'::UUID,'{city}','{last_updated}','{country_id}');\n"
            insert_statements += sql

        file.write(insert_statements)
