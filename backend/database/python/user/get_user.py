import os

import psycopg2
from database.python.helpers.format_data import format_user

dirname = os.path.dirname(__file__)
select_user_sql = os.path.join(dirname, "../../sql/user/select_user.sql")
select_user_by_email_sql = os.path.join(dirname, "../../sql/user/select_user_by_email.sql")

DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def get_user_from_db(email, password):
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    sql_file = open(select_user_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (email, password))

    data = cursor.fetchone()
    conn.close()

    if data:
        return format_user(data)
    else:
        return None


def get_user_from_db_by_email(email):
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    sql_file = open(select_user_by_email_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (email,))

    data = cursor.fetchone()
    conn.close()

    if data:
        return format_user(data)
    else:
        return None
