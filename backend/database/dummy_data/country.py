import datetime

import faker

fake = faker.Faker()


def create_dummy_countries_sql(config):
    print("[INFO] Create dummy data for country table")
    insert_statements = ""
    for i in config.get("COUNTRY"):
        country_id = i.get("uuid")
        name_of_country = fake.country().replace("'", "''")
        last_updated = datetime.datetime.now()

        sql = (
            "INSERT INTO country (country_id,name_of_country,last_updated) "
            f"VALUES ('{country_id}'::UUID,'{name_of_country}','{last_updated}');\n"
        )
        insert_statements += sql

    return insert_statements
