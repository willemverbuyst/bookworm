import os

from create_dummy_data import create_dummy_data

dirname = os.path.dirname(__file__)


def create_sql_insert_files(dummy_data, name):
    print(f"[INFO] Write to 'insert_{name}.sql'")
    with open(f'../sql/{name}/dummy_data_insert_{name}.sql', 'w') as file:
        file.write(dummy_data)
    

    

    



