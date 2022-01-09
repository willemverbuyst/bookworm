import psycopg2
import os
from database.python.helpers.sql_helpers import executeScriptsFromFile
from database.python.helpers.format_data import format_authors

dirname = os.path.dirname(__file__)
select_all_authors_sql = os.path.join(
    dirname, "../../sql/author/select_all_authors.sql"
)

DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def get_authors_from_db():
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    cursor = conn.cursor()

    executeScriptsFromFile(select_all_authors_sql, cursor)

    data = cursor.fetchall()
    conn.close()

    authors_formatted = format_authors(data)

    return authors_formatted
