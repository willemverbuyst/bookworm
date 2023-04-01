import datetime
import random

import faker

fake = faker.Faker()


def create_dummy_user_accounts_sql(config):
    print("[INFO] Create dummy data for user_account table")
    insert_statements = ""
    for i in config.get("USER_ACCOUNT"):
        user_account_id = i.get("uuid")
        first_name = fake.first_name()
        last_name = fake.last_name()
        email = fake.email()
        create_date = datetime.date.today()
        password = "test123"
        activebool = fake.boolean(chance_of_getting_true=50)
        # TODO FIX THIS CAN BE OUT OF SYNC WITH ACTIVE BOOL
        activeint = random.randint(0,1)
        last_updated = datetime.datetime.now()
        address_id = (config.get("ADDRESS")[random.randint(0,len(config.get("ADDRESS")) - 1)]).get("uuid")
        birth_date = fake.date()
        place_of_birth = (config.get("CITY")[random.randint(0,len(config.get("CITY")) - 1)]).get("uuid")          
        
    
        sql = "INSERT INTO user_account (user_account_id,first_name,last_name,email,create_date,password,activebool,activeint,last_updated,address_id,birth_date,place_of_birth) " \
            f"VALUES ('{user_account_id}'::UUID,'{first_name}','{last_name}','{email}','{create_date}','{password}',{activebool},{activeint},'{last_updated}','{address_id}'::UUID,'{birth_date}','{place_of_birth}'::UUID);\n"
        insert_statements += sql

    print("[INFO] Write to 'insert_user_accounts.sql'")
    with open('insert_user_accounts.sql', 'w') as file:
        file.write(insert_statements)
