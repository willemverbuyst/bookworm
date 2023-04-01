import os

import psycopg2
from database.python.rental.helpers import format_rentals

dirname = os.path.dirname(__file__)
select_count_rentals_sql = os.path.join(dirname, "../../sql/rental/select_count_rentals.sql")
select_rentals_sql = os.path.join(dirname, "../../sql/rental/select_rentals.sql")

DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def get_rentals_from_db(limit, page):
    
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

    print(limit, offset)

    sql_file = open(select_rentals_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (limit, offset))

    data = cursor.fetchall()
    conn.close()

    rentals_formatted = format_rentals(data)

    return rentals_formatted


def get_total_number_of_rentals():
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    sql_file = open(select_count_rentals_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    result = cursor.fetchone()
    conn.close()

    return result[0]