import os

import psycopg2
from database.python.helpers.format_data import format_bookworms, format_user
from database.python.helpers.sql_helpers import executeScriptsFromFile

DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def get_bookworms_from_db(limit, page):
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    if limit:
        offset = int(limit) * (int(page) - 1)
    else:
        offset = 0

    cursor = conn.cursor()
    cursor.execute("""
        SELECT
          bookworm.bookworm_id,
          user_account.first_name, 
          user_account.last_name, 
          user_account.email, 
          address.phone, 
          user_account.activebool AS user_is_active, 
          library.library_name 
        FROM bookworm
        INNER JOIN user_account
        ON bookworm.user_account_id = user_account.user_account_id
        LEFT OUTER JOIN library
        ON bookworm.library_id = library.library_id
        LEFT OUTER JOIN address
        ON user_account.address_id = address.address_id
        ORDER BY bookworm.bookworm_id 
        LIMIT %s 
        OFFSET %s;
        """, 
        (limit, offset)
    )

    data = cursor.fetchall()
    conn.close()

    bookworms_formatted = format_bookworms(data)

    return bookworms_formatted


def get_total_number_of_bookworms():
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
        COUNT (*) 
        FROM bookworm; 
        """
    )

    result = cursor.fetchone()
    conn.close()

    return result[0]


def get_bookworm_details_from_db_by_id(id):
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
        INNER JOIN address
        ON user_account.address_id = address.address_id
        INNER JOIN city AS city_city
        ON city_city.city_id = address.city_id
        INNER JOIN city AS city_place_of_birth
        ON city_place_of_birth.city_id = user_account.place_of_birth
        INNER JOIN country
        ON city_place_of_birth.country_id = country.country_id 
        INNER JOIN bookworm 
        ON bookworm.user_account_id = user_account.user_account_id 
        INNER JOIN library
        ON bookworm.library_id = library.library_id
        AND bookworm.bookworm_id=%s;
        """,
        (
            id,
        ),
    )

    data = cursor.fetchone()
    conn.close()

    if data:
        return format_user(data)
    else:
        return None