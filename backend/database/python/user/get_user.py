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

    cursor.execute("""
        SELECT 
            user_account.user_account_id,
            user_account.bookstore_id,
            user_account.first_name,
            user_account.last_name,
            user_account.username,
            user_account.email,
            address.address,
            address.postal_code,
            address.phone,
            city.city,
            country.country
        FROM user_account
        INNER JOIN address
        ON user_account.address_id = address.address_id
        INNER JOIN city
        ON address.city_id = city.city_id
        INNER JOIN country
        ON city.country_id = country.country_id
        WHERE user_account.active is True
        AND user_account.email=%s 
        AND user_account.password=%s;
        """,
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
