import psycopg2
import os
from database.python.helpers.sql_helpers import executeScriptsFromFile
from database.python.helpers.format_data import format_languages

dirname = os.path.dirname(__file__)
select_all_languages_sql = os.path.join(dirname, "../../sql/language/select_all_languages.sql")

DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def get_languages_from_db():
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    cursor = conn.cursor()

    executeScriptsFromFile(select_all_languages_sql, cursor)

    data = cursor.fetchall()

    conn.close()

    languages_formatted = format_languages(data)

    return languages_formatted
