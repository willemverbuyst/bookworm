import psycopg2
import os
from database.python.helpers.format_data import format_books

dirname = os.path.dirname(__file__)
select_all_books_sql = os.path.join(dirname, "../../sql/book/books_filtered.sql")

DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def get_books_from_db():
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
        ORDER BY book.title;
        """
    )

    data = cursor.fetchall()
    conn.close()

    books_formatted = format_books(data)

    return books_formatted


def get_books_from_db_by_language(language):
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
        WHERE language.language_id = %s 
        ORDER BY book.title; 
        """, 
        (language,)
    )

    data = cursor.fetchall()
    conn.close()

    books_formatted = format_books(data)

    return books_formatted


def get_books_from_db_by_genre(genre):
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
        WHERE genre.genre_id = %s 
        ORDER BY book.title; 
        """, 
        (genre,)
    )

    data = cursor.fetchall()
    conn.close()

    books_formatted = format_books(data)

    return books_formatted
