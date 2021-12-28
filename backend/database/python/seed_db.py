import os
import psycopg2
from helpers.sql_helpers import executeScriptsFromFile

dirname = os.path.dirname(__file__)
sql_helpers = os.path.join(dirname, "../helpers/sql_helpers.py")
create_author_table_sql = os.path.join(dirname, "../sql/book/create_author_table.sql")
create_book_table_sql = os.path.join(dirname, "../sql/book/create_book_table.sql")
create_user_table_sql = os.path.join(dirname, "../sql/user/create_user_table.sql")
insert_authors_sql = os.path.join(dirname, "../sql/book/insert_authors.sql")
insert_books_sql = os.path.join(dirname, "../sql/book/insert_books.sql")
insert_users_sql = os.path.join(dirname, "../sql/user/insert_users.sql")


def seed_db():
    conn = psycopg2.connect(
        database="postgres",
        user="dbuser",
        password="admin2021",
        host="database",
        port="5432",
    )

    cursor = conn.cursor()

    executeScriptsFromFile(create_author_table_sql, cursor)
    executeScriptsFromFile(create_book_table_sql, cursor)
    executeScriptsFromFile(create_user_table_sql, cursor)
    executeScriptsFromFile(insert_authors_sql, cursor)
    executeScriptsFromFile(insert_books_sql, cursor)
    executeScriptsFromFile(insert_users_sql, cursor)

    conn.commit()
    conn.close()


seed_db()
