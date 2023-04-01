import datetime
import random


def create_insert_payments_sql(config):
    print("[INFO] Creating dummy data for inserting payments")
    insert_statements = ""
    for i in config.get("PAYMENT"):
        payment_id = i.get("uuid")
        amount = (config.get("RENTAL_RATE")[random.randint(0,len(config.get("RENTAL_RATE")) - 1)]).get("rate")
        payment_date = datetime.datetime.now()
        last_updated = datetime.datetime.now() 
        bookworm_id = (config.get("BOOKWORM")[random.randint(0,len(config.get("BOOKWORM")) - 1)]).get("uuid")
        staff_id = (config.get("STAFF")[random.randint(0,len(config.get("STAFF")) - 1)]).get("uuid")
        rental_id = (config.get("RENTAL")[random.randint(0,len(config.get("RENTAL")) - 1)]).get("uuid")
  
        sql = "INSERT INTO payment (payment_id,amount,payment_date,last_updated,bookworm_id,staff_id,rental_id) " \
            f"VALUES ('{payment_id}'::UUID,{amount},'{payment_date}','{last_updated}','{bookworm_id}'::UUID,'{staff_id}'::UUID,'{rental_id}'::UUID);\n"
        insert_statements += sql

    print("[INFO] Writing to 'insert_payments.sql'")
    with open('insert_payments.sql', 'w') as file:
        file.write(insert_statements)
