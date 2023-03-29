import datetime
import os

import psycopg2
from database.python.helpers.format_data import format_languages
from database.python.helpers.sql_helpers import executeScriptsFromFile

dirname = os.path.dirname(__file__)
select_all_languages_sql = os.path.join(dirname, "../../sql/language/select_all_languages.sql")

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

    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO language (language_id,language,last_updated) 
        VALUES (%s, %s, %s);
        """, 
        (
        new_id, language, datetime.datetime.now()
        )
    )

    conn.commit()
    conn.close()

    return
