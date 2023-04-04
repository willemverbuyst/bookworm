import os

import psycopg2
from database.python.helpers.format_data import format_user

dirname = os.path.dirname(__file__)
select_user_sql = os.path.join(dirname, "../../sql/user_account/select_user.sql")
select_user_by_email_sql = os.path.join(dirname, "../../sql/user_account/select_user_by_email.sql")
from database.python.helpers.sql_helpers import create_connection


def get_user_from_db(email, password):
    conn = create_connection()

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
    conn = create_connection()

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
