import os

import psycopg2
from database.python.author.helpers import format_authors, format_stats_pages
from database.python.helpers.sql_helpers import create_connection

dirname = os.path.dirname(__file__)
select_authors_sql = os.path.join(dirname, "../../sql/author/select_authors.sql")
select_author_stats_avg_pages_sql = os.path.join(dirname, "../../sql/author/select_author_stats_avg_pages.sql")
select_author_stats_page_sql = os.path.join(dirname, "../../sql/author/select_author_stats_page.sql")
select_count_author_sql = os.path.join(dirname, "../../sql/author/select_count_authors.sql")


def get_authors_from_db(limit, page):
    conn = create_connection()

    if limit:
        offset = int(limit) * (int(page) - 1)
    else:
        offset = 0

    sql_file = open(select_authors_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql,(limit, offset))

    data = cursor.fetchall()
    conn.close()

    authors_formatted = format_authors(data)

    return authors_formatted


def get_author_stats_page_from_db():
    conn = create_connection()

    sql_file = open(select_author_stats_page_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    data = cursor.fetchall()
    conn.close()

    stats_formatted = format_stats_pages(data)

    return stats_formatted


def get_author_stats_avg_pages_from_db():
    conn = create_connection()

    sql_file = open(select_author_stats_avg_pages_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    result = cursor.fetchone()
    conn.close()

    return result[0]


def get_total_number_of_authors():
    conn = create_connection()

    sql_file = open(select_count_author_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    result = cursor.fetchone()
    conn.close()

    return result[0]