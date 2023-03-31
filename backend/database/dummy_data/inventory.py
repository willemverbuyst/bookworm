import datetime
import random


def create_insert_inventory_sql(config):
    print("[INFO] Creating 'insert_inventory.sql'")
    with open('insert_inventory.sql', 'w') as file:
        insert_statements = ""
        for i in config.get("INVENTORY"):
            inventory_id = i.get("uuid")
            last_updated = datetime.datetime.now() 
            book_id = (config.get("BOOK")[random.randint(0,len(config.get("BOOK")) - 1)]).get("uuid")
            library_id = (config.get("LIBRARY")[random.randint(0,len(config.get("LIBRARY")) - 1)]).get("uuid")
      
            sql = "INSERT INTO inventory (inventory_id,last_updated,book_id,library_id) " \
                f"VALUES ('{inventory_id}'::UUID,'{last_updated}','{book_id}'::UUID,'{library_id}'::UUID);\n"
            insert_statements += sql

        file.write(insert_statements)


