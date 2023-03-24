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
            user_account.first_name,
            user_account.last_name,
            TO_CHAR(user_account.birth_date, 'DD/MM/YYYY'), 
            city_place_of_birth.city AS place_of_birth,
            user_account.email, 
            address.phone, 
            address.address, 
            address.postal_code, 
            city_city.city,
            country.country,
            library.library_name
        FROM user_account
        FULL OUTER JOIN address
        ON user_account.address_id = address.address_id
        FULL OUTER JOIN city AS city_city
        ON city_city.city_id = address.city_id
        FULL OUTER JOIN city AS city_place_of_birth
        ON city_place_of_birth.city_id = user_account.place_of_birth
        FULL OUTER JOIN country
        ON city_place_of_birth.country_id = country.country_id 
        FULL OUTER JOIN bookworm 
        ON bookworm.user_account_id = user_account.user_account_id 
        FULL OUTER JOIN library
        ON bookworm.library_id = library.library_id
        WHERE user_account.activebool is True
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


def get_user_from_db_by_email(email):
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
            user_account.first_name,
            user_account.last_name,
            TO_CHAR(user_account.birth_date, 'DD/MM/YYYY'), 
            city_place_of_birth.city AS place_of_birth,
            user_account.email, 
            address.phone, 
            address.address, 
            address.postal_code, 
            city_city.city,
            country.country,
            library.library_name
        FROM user_account
        FULL OUTER JOIN address
        ON user_account.address_id = address.address_id
        FULL OUTER JOIN city AS city_city
        ON city_city.city_id = address.city_id
        FULL OUTER JOIN city AS city_place_of_birth
        ON city_place_of_birth.city_id = user_account.place_of_birth
        FULL OUTER JOIN country
        ON city_place_of_birth.country_id = country.country_id 
        FULL OUTER JOIN bookworm 
        ON bookworm.user_account_id = user_account.user_account_id 
        FULL OUTER JOIN library
        ON bookworm.library_id = library.library_id
        WHERE user_account.activebool is True
        AND user_account.email=%s;
        """,
        (
            email,
        ),
    )

    data = cursor.fetchone()
    conn.close()

    if data:
        return format_user(data)
    else:
        return None