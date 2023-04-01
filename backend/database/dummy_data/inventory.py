import datetime
import random


def create_dummy_inventory_sql(config):
    print("[INFO] Create dummy data for inventory table")
    insert_statements = ""
    for i in config.get("INVENTORY"):
        inventory_id = i.get("uuid")
        last_updated = datetime.datetime.now() 
        book_id = (config.get("BOOK")[random.randint(0,len(config.get("BOOK")) - 1)]).get("uuid")
        library_id = (config.get("LIBRARY")[random.randint(0,len(config.get("LIBRARY")) - 1)]).get("uuid")
    
        sql = "INSERT INTO inventory (inventory_id,last_updated,book_id,library_id) " \
            f"VALUES ('{inventory_id}'::UUID,'{last_updated}','{book_id}'::UUID,'{library_id}'::UUID);\n"
        insert_statements += sql

    return insert_statements

