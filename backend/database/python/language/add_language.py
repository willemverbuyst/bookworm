import datetime
import os
import uuid

import psycopg2

dirname = os.path.dirname(__file__)
insert_language_sql = os.path.join(dirname, "../../sql/language/insert_language.sql")
from database.python.helpers.sql_helpers import create_connection


def add_language_to_db(new_id, language):
    conn = create_connection()

    sql_file = open(insert_language_sql, "r")
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (str(new_id), language, datetime.datetime.now()))

    conn.commit()
    conn.close()

    return


def add_languages_to_db(languages):
    conn = create_connection()

    sql_file = open(insert_language_sql, "r")
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    for language in languages:
        new_id = uuid.uuid4()
        cursor.execute(
            raw_sql, (str(new_id), language.name_of_language, datetime.datetime.now())
        )

    conn.commit()
    conn.close()

    return
