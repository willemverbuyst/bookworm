import os

import psycopg2
import psycopg2.extras
from config import config
from create_dummy_data import create_dummy_data
from create_sql_insert_files import create_sql_insert_files
from create_sql_tables import create_sql_tables

dirname = os.path.dirname(__file__)

DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def seed_db():

    psycopg2.extras.register_uuid()

    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    cursor = conn.cursor()

    create_sql_tables(cursor)

    dummy_data = create_dummy_data(config)

    print("[INFO] Insert dummy data into DB")
    cursor.execute(dummy_data.get("country"))
    cursor.execute(dummy_data.get("city"))
    cursor.execute(dummy_data.get("address"))
    cursor.execute(dummy_data.get("language"))
    cursor.execute(dummy_data.get("rental_rate"))
    cursor.execute(dummy_data.get("genre"))
    cursor.execute(dummy_data.get("author"))
    cursor.execute(dummy_data.get("book"))
    cursor.execute(dummy_data.get("book_author"))
    cursor.execute(dummy_data.get("library"))
    cursor.execute(dummy_data.get("user_account"))
    cursor.execute(dummy_data.get("staff"))
    cursor.execute(dummy_data.get("bookworm"))
    cursor.execute(dummy_data.get("inventory"))
    cursor.execute(dummy_data.get("review"))
    cursor.execute(dummy_data.get("rental"))
    cursor.execute(dummy_data.get("payment"))

    conn.commit()
    conn.close()


seed_db()
