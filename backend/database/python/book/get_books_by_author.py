import os

import psycopg2
from database.python.book.helpers import format_books_for_author
from database.python.helpers.sql_helpers import create_connection

dirname = os.path.dirname(__file__)
select_books_by_author_sql = os.path.join(
    dirname, "../../sql/book/select_books_by_author.sql"
)


def get_books_by_author_id_from_db(id):
    conn = create_connection()

    sql_file = open(select_books_by_author_sql, "r")
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (id,))

    data = cursor.fetchall()

    conn.close()

    if data:
        return format_books_for_author(data)
    else:
        return None
