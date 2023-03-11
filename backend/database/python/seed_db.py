import os
import psycopg2
from helpers.sql_helpers import executeScriptsFromFile


dirname = os.path.dirname(__file__)
sql_helpers = os.path.join(dirname, "../helpers/sql_helpers.py")
create_country_table_sql = os.path.join(dirname, "../sql/country/create_country_table.sql")
create_city_table_sql = os.path.join(dirname, "../sql/city/create_city_table.sql")
create_address_table_sql = os.path.join(dirname, "../sql/address/create_address_table.sql")
create_language_table_sql = os.path.join(dirname, "../sql/language/create_language_table.sql")
create_rental_rate_table_sql = os.path.join(dirname, "../sql/rental_rate/create_rental_rate_table.sql")
create_genre_table_sql = os.path.join(dirname, "../sql/genre/create_genre_table.sql")
create_author_table_sql = os.path.join(dirname, "../sql/author/create_author_table.sql")
create_book_table_sql = os.path.join(dirname, "../sql/book/create_book_table.sql")
create_book_author_table_sql = os.path.join(dirname, "../sql/book_author/create_book_author_table.sql")
create_library_table_sql = os.path.join(dirname, "../sql/library/create_library_table.sql")
create_user_account_table_sql = os.path.join(dirname, "../sql/user_account/create_user_account_table.sql")
create_staff_table_sql = os.path.join(dirname, "../sql/staff/create_staff_table.sql")
create_bookworm_table_sql = os.path.join(dirname, "../sql/bookworm/create_bookworm_table.sql")
create_inventory_table_sql = os.path.join(dirname, "../sql/inventory/create_inventory_table.sql")
create_review_table_sql = os.path.join(dirname, "../sql/review/create_review_table.sql")
create_rental_table_sql = os.path.join(dirname, "../sql/rental/create_rental_table.sql")
create_payment_table_sql = os.path.join(dirname, "../sql/payment/create_payment_table.sql")

insert_country_sql = os.path.join(dirname, "../sql/country/insert_country.sql")
insert_city_sql = os.path.join(dirname, "../sql/city/insert_city.sql")
insert_address_sql = os.path.join(dirname, "../sql/address/insert_address.sql")
insert_language_sql = os.path.join(dirname, "../sql/language/insert_language.sql")
insert_rental_rate_sql = os.path.join(dirname, "../sql/rental_rate/insert_rental_rate.sql")
insert_genre_sql = os.path.join(dirname, "../sql/genre/insert_genre.sql")
insert_author_sql = os.path.join(dirname, "../sql/author/insert_author.sql")
insert_book_sql = os.path.join(dirname, "../sql/book/insert_book.sql")
insert_book_author_sql = os.path.join(dirname, "../sql/book_author/insert_book_author.sql")
insert_library_sql = os.path.join(dirname, "../sql/library/insert_library.sql")
insert_user_account_sql = os.path.join(dirname, "../sql/user_account/insert_user_account.sql")
insert_staff_sql = os.path.join(dirname, "../sql/staff/insert_staff.sql")
insert_bookworm_sql = os.path.join(dirname, "../sql/bookworm/insert_bookworm.sql")
insert_inventory_sql = os.path.join(dirname, "../sql/inventory/insert_inventory.sql")
insert_review_sql = os.path.join(dirname, "../sql/review/insert_review.sql")
insert_rental_sql = os.path.join(dirname, "../sql/rental/insert_rental.sql")
insert_payment_sql = os.path.join(dirname, "../sql/payment/insert_payment.sql")

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

    executeScriptsFromFile(create_country_table_sql, cursor)
    executeScriptsFromFile(create_city_table_sql, cursor)
    executeScriptsFromFile(create_address_table_sql, cursor)
    executeScriptsFromFile(create_language_table_sql, cursor)
    executeScriptsFromFile(create_rental_rate_table_sql, cursor)
    executeScriptsFromFile(create_genre_table_sql, cursor)
    executeScriptsFromFile(create_author_table_sql, cursor)
    executeScriptsFromFile(create_book_table_sql, cursor)
    executeScriptsFromFile(create_book_author_table_sql, cursor)
    executeScriptsFromFile(create_library_table_sql, cursor)
    executeScriptsFromFile(create_user_account_table_sql, cursor)
    executeScriptsFromFile(create_staff_table_sql, cursor)
    executeScriptsFromFile(create_bookworm_table_sql, cursor)
    executeScriptsFromFile(create_inventory_table_sql, cursor)
    executeScriptsFromFile(create_review_table_sql, cursor)
    executeScriptsFromFile(create_rental_table_sql, cursor)
    executeScriptsFromFile(create_payment_table_sql, cursor)

    executeScriptsFromFile(insert_country_sql, cursor)
    executeScriptsFromFile(insert_city_sql, cursor)
    executeScriptsFromFile(insert_address_sql, cursor)
    executeScriptsFromFile(insert_language_sql, cursor)
    executeScriptsFromFile(insert_rental_rate_sql, cursor)
    executeScriptsFromFile(insert_genre_sql, cursor)
    executeScriptsFromFile(insert_author_sql, cursor)
    executeScriptsFromFile(insert_book_sql, cursor)
    executeScriptsFromFile(insert_book_author_sql, cursor)
    executeScriptsFromFile(insert_library_sql, cursor)
    executeScriptsFromFile(insert_user_account_sql, cursor)
    executeScriptsFromFile(insert_staff_sql, cursor)
    executeScriptsFromFile(insert_bookworm_sql, cursor)
    executeScriptsFromFile(insert_inventory_sql, cursor)
    executeScriptsFromFile(insert_review_sql, cursor)
    executeScriptsFromFile(insert_rental_sql, cursor)
    executeScriptsFromFile(insert_payment_sql, cursor)

    conn.commit()
    conn.close()


seed_db()
