import os

import psycopg2
from database.python.library.helpers import format_libraries

DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def get_libraries_from_db(limit, offset):
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
            library.library_id,
            library.library_name,
            address.phone, 
            address.address, 
            address.postal_code, 
            city.city,
            country.country
        FROM library
        INNER JOIN address 
        ON library.address_id = address.address_id
        INNER JOIN city
        ON city.city_id = address.city_id
        INNER JOIN country
        ON country.country_id = city.country_id 
        ORDER BY library.library_id  
        LIMIT %s 
        OFFSET %s;
        """, 
        (limit, offset)
    )

    data = cursor.fetchall()
    conn.close()

    libraries_formatted = format_libraries(data)

    return libraries_formatted


def get_total_number_of_libraries():
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
        COUNT(*) AS number_of_libraries 
        FROM library;
        """
    )

    result = cursor.fetchone()
    conn.close()

    return result[0]