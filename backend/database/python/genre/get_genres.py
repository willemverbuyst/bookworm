import os

import psycopg2
from database.python.genre.helpers import format_genres
from database.python.helpers.sql_helpers import create_connection

dirname = os.path.dirname(__file__)
select_genres_sql = os.path.join(dirname, "../../sql/genre/select_genres.sql")


def get_genres_from_db():
    conn = create_connection()

    sql_file = open(select_genres_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    data = cursor.fetchall()

    conn.close()

    genres_formatted = format_genres(data)

    return genres_formatted
