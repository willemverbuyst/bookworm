import psycopg2
import os
from database.python.helpers.sql_helpers import executeScriptsFromFile
from database.python.helpers.format_data import format_authors

dirname = os.path.dirname(__file__)
select_all_authors_sql = os.path.join(dirname, "../../sql/book/select_all_authors.sql")


def get_authors_from_db():
    conn = psycopg2.connect(
        database="postgres",
        user="dbuser",
        password="admin2021",
        host="database",
        port="5432",
    )

    cursor = conn.cursor()

    executeScriptsFromFile(select_all_authors_sql, cursor)

    data = cursor.fetchall()
    conn.close()

    authors_formatted = format_authors(data)

    return authors_formatted
