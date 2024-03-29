import os

import psycopg2
from database.python.bookworm.helpers import (format_bookworms,
                                              format_stats_libraries)
from database.python.helpers.sql_helpers import create_connection
from database.python.user.helpers import format_user

dirname = os.path.dirname(__file__)
select_bookworm_details_sql = os.path.join(dirname, "../../sql/bookworm/select_bookworm_details.sql")
select_bookworm_stats_library_sql = os.path.join(dirname, "../../sql/bookworm/select_bookworm_stats_library.sql")
select_bookworms_sql = os.path.join(dirname, "../../sql/bookworm/select_bookworms.sql")
select_count_bookworms_sql = os.path.join(dirname, "../../sql/bookworm/select_count_bookworms.sql")


def get_bookworms_from_db(limit, page, active):
    conn = create_connection()

    if limit:
        offset = int(limit) * (int(page) - 1)
    else:
        offset = 0

    sql_file = open(select_bookworms_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    if (active == "true"):
        active_int = 1
    else:
        active_int = 0

    cursor = conn.cursor()
    cursor.execute(raw_sql, (active_int, limit, offset))

    data = cursor.fetchall()
    conn.close()

    bookworms_formatted = format_bookworms(data)

    return bookworms_formatted


def get_total_number_of_bookworms(active):
    conn = create_connection()

    sql_file = open(select_count_bookworms_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    if (active == "true"):
        active_int = 1
    else:
        active_int = 0

    cursor = conn.cursor()
    cursor.execute(raw_sql, (active_int,))

    result = cursor.fetchone()
    conn.close()

    return result[0]


def get_bookworm_details_from_db_by_id(id):
    conn = create_connection()

    sql_file = open(select_bookworm_details_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (id,))

    data = cursor.fetchone()
    conn.close()

    if data:
        return format_user(data)
    else:
        return None


def get_bookworm_stats_library_from_db():
    conn = create_connection()

    sql_file = open(select_bookworm_stats_library_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    data = cursor.fetchall()
    conn.close()

    stats_formatted = format_stats_libraries(data)

    return stats_formatted