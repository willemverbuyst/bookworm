import datetime


def create_dummy_rental_rates_sql(config):
    print("[INFO] Create dummy data for rental_rate table")
    insert_statements = ""
    for i in config.get("RENTAL_RATE"):
        rental_rate_id = i.get("uuid")
        rate = i.get("rate")
        last_updated = datetime.datetime.now() 
    
        sql = "INSERT INTO rental_rate (rental_rate_id,rate,last_updated) " \
            f"VALUES ('{rental_rate_id}'::UUID,{rate},'{last_updated}');\n"
        insert_statements += sql

    return insert_statements