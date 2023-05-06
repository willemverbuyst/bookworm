import os

import psycopg2
from database.python.helpers.sql_helpers import create_connection
from database.python.library.helpers import format_libraries, format_library

dirname = os.path.dirname(__file__)
select_count_libraries_sql = os.path.join(
    dirname, "../../sql/library/select_count_libraries.sql"
)
select_libraries_sql = os.path.join(dirname, "../../sql/library/select_libraries.sql")
select_library_by_id_sql = os.path.join(
    dirname, "../../sql/library/select_library_by_id.sql"
)


def get_libraries_from_db(limit, offset):
    conn = create_connection()

    if limit:
        offset = int(limit) * (int(page) - 1)
    else:
        offset = 0

    sql_file = open(select_libraries_sql, "r")
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (limit, offset))

    data = cursor.fetchall()
    conn.close()

    libraries_formatted = format_libraries(data)

    return libraries_formatted


def get_total_number_of_libraries():
    conn = create_connection()

    sql_file = open(select_count_libraries_sql, "r")
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    result = cursor.fetchone()
    conn.close()

    return result[0]


def get_library_by_id_from_db(id):
    conn = create_connection()

    sql_file = open(select_library_by_id_sql, "r")
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (id,))

    data = cursor.fetchone()
    conn.close()

    if data:
        return format_library(data)
    else:
        return None
