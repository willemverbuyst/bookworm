import os
import psycopg2
from helpers.sql_helpers import executeScriptsFromFile


dirname = os.path.dirname(__file__)
sql_helpers = os.path.join(dirname, "../helpers/sql_helpers.py")
create_author_table_sql = os.path.join(dirname, "../sql/author/create_author_table.sql")
create_book_table_sql = os.path.join(dirname, "../sql/book/create_book_table.sql")
create_country_table_sql = os.path.join(dirname, "../sql/country/create_country_table.sql")
create_city_table_sql = os.path.join(dirname, "../sql/city/create_city_table.sql")
create_address_table_sql = os.path.join(dirname, "../sql/address/create_address_table.sql")
create_genre_table_sql = os.path.join(dirname, "../sql/genre/create_genre_table.sql")
create_book_genre_table_sql = os.path.join(dirname, "../sql/book_genre/create_book_genre_table.sql")
create_user_account_table_sql = os.path.join(dirname, "../sql/user_account/create_user_account_table.sql")
insert_author_sql = os.path.join(dirname, "../sql/author/insert_author.sql")
insert_book_sql = os.path.join(dirname, "../sql/book/insert_book.sql")
insert_country_sql = os.path.join(dirname, "../sql/country/insert_country.sql")
insert_city_sql = os.path.join(dirname, "../sql/city/insert_city.sql")
insert_address_sql = os.path.join(dirname, "../sql/address/insert_address.sql")
insert_genre_sql = os.path.join(dirname, "../sql/genre/insert_genre.sql")
insert_book_genre_sql = os.path.join(dirname, "../sql/book_genre/insert_book_genre.sql")
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
    executeScriptsFromFile(create_country_table_sql, cursor)
    executeScriptsFromFile(create_city_table_sql, cursor)
    executeScriptsFromFile(create_address_table_sql, cursor)
    executeScriptsFromFile(create_genre_table_sql, cursor)
    executeScriptsFromFile(create_book_genre_table_sql, cursor)
    executeScriptsFromFile(create_user_account_table_sql, cursor)
    executeScriptsFromFile(insert_author_sql, cursor)
    executeScriptsFromFile(insert_book_sql, cursor)
    executeScriptsFromFile(insert_country_sql, cursor)
    executeScriptsFromFile(insert_city_sql, cursor)
    executeScriptsFromFile(insert_address_sql, cursor)
    executeScriptsFromFile(insert_genre_sql, cursor)
    executeScriptsFromFile(insert_book_genre_sql, cursor)
    executeScriptsFromFile(insert_user_accounts_sql, cursor)

    conn.commit()
    conn.close()


seed_db()
