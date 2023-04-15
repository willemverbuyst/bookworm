import os

import psycopg2
from database.python.helpers.sql_helpers import create_connection
from database.python.rental.helpers import (format_rental_stats_day,
                                            format_rental_stats_duration,
                                            format_rentals)

dirname = os.path.dirname(__file__)
select_count_rentals_sql = os.path.join(dirname, "../../sql/rental/select_count_rentals.sql")
select_count_rentals_returned_false_sql = os.path.join(dirname, "../../sql/rental/select_count_rentals_returned_false.sql")
select_count_rentals_returned_true_sql = os.path.join(dirname, "../../sql/rental/select_count_rentals_returned_true.sql")
select_rental_stats_day_sql = os.path.join(dirname, "../../sql/rental/select_rental_stats_day.sql")
select_rental_stats_duration_sql = os.path.join(dirname, "../../sql/rental/select_rental_stats_duration.sql")
select_rentals_returned_false_sql = os.path.join(dirname, "../../sql/rental/select_rentals_returned_false.sql")
select_rentals_returned_true_sql = os.path.join(dirname, "../../sql/rental/select_rentals_returned_true.sql")
select_rentals_sql = os.path.join(dirname, "../../sql/rental/select_rentals.sql")


def get_rentals_from_db(limit, page, filter):
    conn = create_connection()

    if limit:
        offset = int(limit) * (int(page) - 1)
    else:
        offset = 0

    if filter == "returned":
        file = select_rentals_returned_true_sql
    elif filter == "not_returned":
        file = select_rentals_returned_false_sql
    else:
        file = select_rentals_sql

    sql_file = open(file, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (limit, offset))

    data = cursor.fetchall()
    conn.close()

    rentals_formatted = format_rentals(data)

    return rentals_formatted


def get_total_number_of_rentals(filter):
    conn = create_connection()

    if filter == "returned":
        file = select_count_rentals_returned_true_sql
    elif filter == "not_returned":
        file = select_count_rentals_returned_false_sql
    else:
        file = select_count_rentals_sql 
    
    sql_file = open(file, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    result = cursor.fetchone()
    conn.close()

    return result[0]


def get_rental_stats_duration_from_db():
    conn = create_connection()

    sql_file = open(select_rental_stats_duration_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    data = cursor.fetchall()
    conn.close()

    stats_formatted = format_rental_stats_duration(data)

    return stats_formatted


def get_rental_stats_day_from_db():
    conn = create_connection()

    sql_file = open(select_rental_stats_day_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    data = cursor.fetchall()
    conn.close()

    stats_formatted = format_rental_stats_day(data)

    return stats_formatted
