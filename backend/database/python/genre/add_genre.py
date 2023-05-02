import datetime
import os
import uuid

import psycopg2

dirname = os.path.dirname(__file__)
insert_genre_sql = os.path.join(dirname, "../../sql/genre/insert_genre.sql")
from database.python.helpers.sql_helpers import create_connection


def add_genre_to_db(new_id, genre):
    conn = create_connection()

    sql_file = open(insert_genre_sql, "r")
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (str(new_id), genre, datetime.datetime.now()))

    conn.commit()
    conn.close()

    return


def add_genres_to_db(genres):
    conn = create_connection()

    sql_file = open(insert_genre_sql, "r")
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    for genre in genres:
        new_id = uuid.uuid4()
        cursor.execute(raw_sql, (str(new_id), genre.name, datetime.datetime.now()))

    conn.commit()
    conn.close()

    return
