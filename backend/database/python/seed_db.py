import os
import psycopg2
from helpers.sql_helpers import executeScriptsFromFile

dirname = os.path.dirname(__file__)
sql_helpers = os.path.join(dirname, "../helpers/sql_helpers.py")
create_author_table_sql = os.path.join(dirname, "../sql/author/create_author_table.sql")
create_book_table_sql = os.path.join(dirname, "../sql/book/create_book_table.sql")
create_user_account_table_sql = os.path.join(dirname, "../sql/user_account/create_user_account_table.sql")
insert_authors_sql = os.path.join(dirname, "../sql/author/insert_authors.sql")
insert_books_sql = os.path.join(dirname, "../sql/book/insert_books.sql")
insert_user_accounts_sql = os.path.join(dirname, "../sql/user_account/insert_user_accounts.sql")

DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def seed_db():
    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    cursor = conn.cursor()

    executeScriptsFromFile(create_author_table_sql, cursor)
    executeScriptsFromFile(create_book_table_sql, cursor)
    executeScriptsFromFile(create_user_account_table_sql, cursor)
    executeScriptsFromFile(insert_authors_sql, cursor)
    executeScriptsFromFile(insert_books_sql, cursor)
    executeScriptsFromFile(insert_user_accounts_sql, cursor)

    conn.commit()
    conn.close()


seed_db()
