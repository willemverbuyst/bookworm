import os

import psycopg2
from database.python.helpers.format_data import (format_books,
                                                 format_stats_genres,
                                                 format_stats_languages)

dirname = os.path.dirname(__file__)
select_books_sql = os.path.join(dirname, "../../sql/book/select_books.sql")
select_book_stats_genre_sql = os.path.join(dirname, "../../sql/book/select_book_stats_genre.sql")
select_book_stats_language_sql = os.path.join(dirname, "../../sql/book/select_book_stats_language.sql")
select_count_books_sql = os.path.join(dirname, "../../sql/book/select_count_books.sql")

DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def get_books_from_db(genre, language, limit, page):
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

    sql_file = open(select_books_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (genre, genre, genre, language, language, language, limit, offset))

    data = cursor.fetchall()
    conn.close()

    books_formatted = format_books(data)

    return books_formatted


def get_total_number_of_books(genre, language):
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    sql_file = open(select_count_books_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (genre, genre, genre, language, language, language))

    result = cursor.fetchone()
    conn.close()

    return result[0]


def get_book_stats_language_from_db():
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    sql_file = open(select_book_stats_language_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    data = cursor.fetchall()
    conn.close()

    stats_formatted = format_stats_languages(data)

    return stats_formatted


def get_book_stats_genre_from_db():
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    sql_file = open(select_book_stats_genre_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    data = cursor.fetchall()
    conn.close()

    stats_formatted = format_stats_genres(data)

    return stats_formatted