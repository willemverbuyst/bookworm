import os

import psycopg2
from database.python.helpers.format_data import (format_authors,
                                                 format_stats_pages)
from database.python.helpers.sql_helpers import executeScriptsFromFile

dirname = os.path.dirname(__file__)
select_all_authors_sql = os.path.join(
    dirname, "../../sql/author/select_all_authors.sql"
)
select_author_stats_avg_pages_sql = os.path.join(dirname, "../../sql/author/select_author_stats_avg_pages.sql")
select_author_stats_page_sql = os.path.join(dirname, "../../sql/author/select_author_stats_page.sql")


DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def get_authors_from_db():
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    cursor = conn.cursor()

    executeScriptsFromFile(select_all_authors_sql, cursor)

    data = cursor.fetchall()
    conn.close()

    authors_formatted = format_authors(data)

    return authors_formatted


def get_authors_with_limit_and_page_from_db(limit, page):
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    cursor = conn.cursor()

    offset = int(limit) * (int(page) - 1)

    cursor.execute("""
        SELECT 
            author.author_id, 
            author.first_name, 
            author.last_name, 
            COUNT(book.title) AS books_written 
        FROM author 
        FULL OUTER JOIN book_author 
        ON author.author_id = book_author.author_id 
        FULL OUTER JOIN book 
        ON book_author.book_id = book.book_id 
        GROUP BY author.author_id, author.first_name, author.last_name 
        ORDER BY author.author_id 
        LIMIT %s 
        OFFSET %s;
        """,
        (limit, offset)
    )

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

    cursor = conn.cursor()
    cursor.execute("""
        SELECT 
        COUNT(*) AS number_of_authors 
        FROM author;
        """
    )

    result = cursor.fetchone()
    conn.close()

    return result[0]