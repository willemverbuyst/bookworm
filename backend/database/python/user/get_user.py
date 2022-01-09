import os
import psycopg2
from database.python.helpers.format_data import format_user

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

    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM user_account WHERE user_account_email=%s AND user_account_password=%s",
        (
            email,
            password,
        ),
    )

    data = cursor.fetchone()
    conn.close()

    if data:
        return format_user(data)
    else:
        return None
