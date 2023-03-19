import os

import psycopg2
from database.python.helpers.format_data import (format_books,
                                                 format_stats_genres,
                                                 format_stats_languages)
from database.python.helpers.sql_helpers import executeScriptsFromFile

dirname = os.path.dirname(__file__)
select_book_stats_genre_sql = os.path.join(dirname, "../../sql/book/select_book_stats_genre.sql")
select_book_stats_language_sql = os.path.join(dirname, "../../sql/book/select_book_stats_language.sql")

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

    cursor = conn.cursor()
    cursor.execute("""
        SELECT 
            book.book_id,
            book.title,
            book.year_published, 
            CONCAT (author.first_name, ' ', author.last_name) as author,
            genre.genre, 
            language.language 
        FROM book 
        INNER JOIN book_author 
        ON book.book_id = book_author.book_id 
        INNER JOIN author 
        ON author.author_id = book_author.author_id 
        INNER JOIN genre 
        ON genre.genre_id = book.genre_id 
        INNER JOIN language 
        ON book.language_id = language.language_id 
        WHERE ( ( %s IS NOT NULL AND genre.genre_id = %s ) 
            OR %s IS NULL) 
        AND ( ( %s IS NOT NULL AND language.language_id = %s ) 
            OR %s IS NULL) 
        ORDER BY book.title 
        LIMIT %s 
        OFFSET %s;
        """, 
        (genre, genre, genre, language, language, language,  limit, offset)
    )

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

    print("r")

    cursor = conn.cursor()
    cursor.execute("""
        SELECT 
        COUNT (*) 
        FROM book 
        INNER JOIN book_author 
        ON book.book_id = book_author.book_id 
        INNER JOIN author 
        ON author.author_id = book_author.author_id 
        INNER JOIN genre 
        ON genre.genre_id = book.genre_id 
        INNER JOIN language 
        ON book.language_id = language.language_id 
        WHERE ( ( %s IS NOT NULL AND genre.genre_id = %s ) 
            OR %s IS NULL) 
        AND ( ( %s IS NOT NULL AND language.language_id = %s ) 
            OR %s IS NULL);
        """, 
        (genre, genre, genre, language, language, language)
    )

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

    cursor = conn.cursor()

    executeScriptsFromFile(select_book_stats_language_sql, cursor)

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

    cursor = conn.cursor()

    executeScriptsFromFile(select_book_stats_genre_sql, cursor)

    data = cursor.fetchall()
    conn.close()

    stats_formatted = format_stats_genres(data)

    return stats_formatted