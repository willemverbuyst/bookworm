import datetime


def create_insert_rental_rates_sql(config):
    print("[INFO] Creating 'insert_rental_rates.sql'")
    with open('insert_rental_rates.sql', 'w') as file:
        insert_statements = ""
        for i in config.get("RENTAL_RATE"):
            rental_rate_id = i.get("uuid")
            rate = i.get("rate")
            last_updated = datetime.datetime.now() 
      
            sql = "INSERT INTO rental_rate (rental_rate_id,rate,last_updated)" \
                f"VALUES ('{rental_rate_id}'::UUID,{rate},'{last_updated}');\n"
            insert_statements += sql

        file.write(insert_statements)
