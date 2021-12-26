import psycopg2
import os
from database.helpers.sql_helpers import executeScriptsFromFile
from database.helpers.format_data import format_books

dirname = os.path.dirname(__file__)
select_all_sql = os.path.join(dirname, "./sql/select_all.sql")


def get_books_from_db():
    conn = psycopg2.connect(
        database="postgres",
        user="dbuser",
        password="admin2021",
        host="database",
        port="5432",
    )

    cursor = conn.cursor()

    executeScriptsFromFile(select_all_sql, cursor)

    data = cursor.fetchall()
    conn.close()

    books_formatted = format_books(data)

    return books_formatted