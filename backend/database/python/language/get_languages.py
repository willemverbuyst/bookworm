import os

import psycopg2
from database.python.helpers.format_data import format_languages

dirname = os.path.dirname(__file__)
select_count_languages_sql = os.path.join(dirname, "../../sql/language/select_count_languages.sql")
select_languages_sql = os.path.join(dirname, "../../sql/language/select_languages.sql")

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

    sql_file = open(select_languages_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    data = cursor.fetchall()

    conn.close()

    languages_formatted = format_languages(data)

    return languages_formatted


def get_total_number_of_languages():
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    sql_file = open(select_count_languages_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    result = cursor.fetchone()
    conn.close()

    return result[0]