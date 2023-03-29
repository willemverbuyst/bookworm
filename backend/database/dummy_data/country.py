import datetime

import faker

fake = faker.Faker()


def create_insert_countries_sql(config):
    print("[INFO] Creating 'insert_countries.sql'")
    with open('insert_countries.sql', 'w') as file:
        insert_statements = ""
        for i in config.get("COUNTRY"):
            country_id = i.get("uuid")
            country = fake.country().replace("'", "''")
            last_updated = datetime.datetime.now() 
      
            sql = "INSERT INTO country (country_id,country,last_updated) " \
                f"VALUES ('{country_id}'::UUID,'{country}','{last_updated}');\n"
            insert_statements += sql

        file.write(insert_statements)
