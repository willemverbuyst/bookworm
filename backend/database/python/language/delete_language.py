import datetime
import os

import psycopg2

dirname = os.path.dirname(__file__)
delete_language_sql = os.path.join(dirname, "../../sql/language/delete_language.sql")
from database.python.helpers.sql_helpers import create_connection


def delete_language_from_db(id):
    conn = create_connection()

    sql_file = open(delete_language_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (id,))
    
    conn.commit()
    conn.close()

    return
