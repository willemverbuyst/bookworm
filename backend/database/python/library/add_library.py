import datetime
import os

import psycopg2

dirname = os.path.dirname(__file__)
insert_library_sql = os.path.join(dirname, "../../sql/library/insert_library.sql")
from database.python.helpers.sql_helpers import create_connection


def add_library_to_db(new_id, library, address_id):
    conn = create_connection()

    sql_file = open(insert_library_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (str(new_id), library, datetime.datetime.now(), str(address_id)))

    conn.commit()
    conn.close()

    return
