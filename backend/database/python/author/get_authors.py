import os

import psycopg2
from database.python.helpers.format_data import (format_authors,
                                                 format_stats_pages)
from database.python.helpers.sql_helpers import executeScriptsFromFile

dirname = os.path.dirname(__file__)
select_authors_sql = os.path.join(dirname, "../../sql/author/select_authors.sql")
select_author_stats_avg_pages_sql = os.path.join(dirname, "../../sql/author/select_author_stats_avg_pages.sql")
select_author_stats_page_sql = os.path.join(dirname, "../../sql/author/select_author_stats_page.sql")
select_count_author_sql = os.path.join(dirname, "../../sql/author/select_count_authors.sql")


DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def get_authors_from_db(limit, page):
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
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    cursor = conn.cursor()

    executeScriptsFromFile(select_author_stats_page_sql, cursor)

    data = cursor.fetchall()
    conn.close()

    stats_formatted = format_stats_pages(data)

    return stats_formatted


def get_author_stats_avg_pages_from_db():
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    cursor = conn.cursor()

    executeScriptsFromFile(select_author_stats_avg_pages_sql, cursor)

    result = cursor.fetchone()
    conn.close()

    return result[0]



def get_total_number_of_authors():
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    sql_file = open(select_count_author_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    result = cursor.fetchone()
    conn.close()

    return result[0]