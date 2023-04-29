import os

import psycopg2
from database.python.genre.get_genre_by_id import get_genre_by_id_from_db
from database.python.genre.helpers import format_genre
from database.python.helpers.sql_helpers import create_connection

dirname = os.path.dirname(__file__)
update_genre_sql = os.path.join(dirname, "../../sql/genre/update_genre.sql")


def update_genre_in_db(id, genre):
    conn = create_connection()

    sql_file = open(update_genre_sql, "r")
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (genre, id))

    conn.commit()
    conn.close()

    return get_genre_by_id_from_db(id)
