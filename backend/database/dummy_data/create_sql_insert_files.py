import os

from create_dummy_data import create_dummy_data

dirname = os.path.dirname(__file__)





def create_sql_insert_files(dummy_data):
    print("[INFO] Write to 'insert_addresses.sql'")
    with open('insert_addresses.sql', 'w') as file:
        file.write(dummy_data)
    

    

    



