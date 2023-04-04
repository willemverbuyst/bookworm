import datetime
import os

import psycopg2

dirname = os.path.dirname(__file__)
insert_library_sql = os.path.join(dirname, "../../sql/library/insert_library.sql")

DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def add_library_to_db(new_id, library, address_id):
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    sql_file = open(insert_library_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (str(new_id), library, datetime.datetime.now(), str(address_id)))

    conn.commit()
    conn.close()

    return
