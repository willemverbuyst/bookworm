import datetime
import os

import psycopg2
from database.python.helpers.format_data import format_languages

dirname = os.path.dirname(__file__)
insert_language_sql = os.path.join(dirname, "../../sql/language/insert_language.sql")

DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def add_language_to_db(new_id, language):
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    sql_file = open(insert_language_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (new_id, language, datetime.datetime.now()))

    conn.commit()
    conn.close()

    return
