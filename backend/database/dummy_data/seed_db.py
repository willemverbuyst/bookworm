import os

import psycopg2
import psycopg2.extras
from address import create_insert_addresses_sql
from author import create_insert_authors_sql
from book import create_insert_books_sql
from book_author import create_insert_book_author_sql
from city import create_insert_cities_sql
from config import config
from country import create_insert_countries_sql
from genre import create_insert_genres_sql
from language import create_insert_languages_sql
from library import create_insert_libraries_sql
from rental_rate import create_insert_rental_rates_sql
from staff import create_insert_staff_sql
from user_account import create_insert_user_accounts_sql

# from helpers.sql_helpers import executeScriptsFromFile

# from language import create_insert_languages_sql

dirname = os.path.dirname(__file__)
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
# create_bookworm_table_sql = os.path.join(dirname, "../sql/bookworm/create_bookworm_table.sql")
# create_inventory_table_sql = os.path.join(dirname, "../sql/inventory/create_inventory_table.sql")
# create_review_table_sql = os.path.join(dirname, "../sql/review/create_review_table.sql")
# create_rental_table_sql = os.path.join(dirname, "../sql/rental/create_rental_table.sql")
# create_payment_table_sql = os.path.join(dirname, "../sql/payment/create_payment_table.sql")




insert_countries_sql = os.path.join(dirname, "./insert_countries.sql")
insert_cities_sql = os.path.join(dirname, "./insert_cities.sql")
insert_addresses_sql = os.path.join(dirname, "./insert_addresses.sql")
insert_languages_sql = os.path.join(dirname, "./insert_languages.sql")
insert_rental_rates_sql = os.path.join(dirname, "./insert_rental_rates.sql")
insert_genres_sql = os.path.join(dirname, "./insert_genres.sql")
insert_authors_sql = os.path.join(dirname, "./insert_authors.sql")
insert_books_sql = os.path.join(dirname, "./insert_books.sql")
insert_book_author_sql = os.path.join(dirname, "./insert_book_author.sql")
insert_libraries_sql = os.path.join(dirname, "./insert_libraries.sql")
insert_user_accounts_sql = os.path.join(dirname, "./insert_user_accounts.sql")
insert_staff_sql = os.path.join(dirname, "./insert_staff.sql")
# insert_bookworm_sql = os.path.join(dirname, "../sql/bookworm/insert_bookworm.sql")
# insert_inventory_sql = os.path.join(dirname, "../sql/inventory/insert_inventory.sql")
# insert_review_sql = os.path.join(dirname, "../sql/review/insert_review.sql")
# insert_rental_sql = os.path.join(dirname, "../sql/rental/insert_rental.sql")
# insert_payment_sql = os.path.join(dirname, "../sql/payment/insert_payment.sql")

DATABASE = os.environ.get("DATABASE")
DATABASE_USER = os.environ.get("DATABASE_USER")
DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
DATABASE_HOST = os.environ.get("DATABASE_HOST")
DATABASE_PORT = os.environ.get("DATABASE_PORT")


def executeScriptsFromFile(filename, cursor):
    with open(filename, "r") as sqlFile:
        content = sqlFile.read()
        commands = content.split(";")

        for command in commands:
            try:
                if c := command.replace("\n", "").replace("\t", ""): 
                    cursor.execute(c)
            except psycopg2.OperationalError as e:
                print("Command skipped: ", e)


def seed_db():
    create_insert_addresses_sql(config)
    create_insert_cities_sql(config)
    create_insert_countries_sql(config)
    create_insert_languages_sql(config)
    create_insert_rental_rates_sql(config)
    create_insert_genres_sql(config)
    create_insert_authors_sql(config)
    create_insert_books_sql(config)
    create_insert_book_author_sql(config)
    create_insert_libraries_sql(config)
    create_insert_user_accounts_sql(config)
    create_insert_staff_sql(config)

    psycopg2.extras.register_uuid()

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
    # executeScriptsFromFile(create_bookworm_table_sql, cursor)
    # executeScriptsFromFile(create_inventory_table_sql, cursor)
    # executeScriptsFromFile(create_review_table_sql, cursor)
    # executeScriptsFromFile(create_rental_table_sql, cursor)
    # executeScriptsFromFile(create_payment_table_sql, cursor)

    executeScriptsFromFile(insert_countries_sql, cursor)
    executeScriptsFromFile(insert_cities_sql, cursor)
    executeScriptsFromFile(insert_addresses_sql, cursor)
    executeScriptsFromFile(insert_languages_sql, cursor)
    executeScriptsFromFile(insert_rental_rates_sql, cursor)
    executeScriptsFromFile(insert_genres_sql, cursor)
    executeScriptsFromFile(insert_authors_sql, cursor)
    executeScriptsFromFile(insert_books_sql, cursor)
    executeScriptsFromFile(insert_book_author_sql, cursor)
    executeScriptsFromFile(insert_libraries_sql, cursor)
    executeScriptsFromFile(insert_user_accounts_sql, cursor)
    executeScriptsFromFile(insert_staff_sql, cursor)
    # executeScriptsFromFile(insert_bookworm_sql, cursor)
    # executeScriptsFromFile(insert_inventory_sql, cursor)
    # executeScriptsFromFile(insert_review_sql, cursor)
    # executeScriptsFromFile(insert_rental_sql, cursor)
    # executeScriptsFromFile(insert_payment_sql, cursor)

    conn.commit()
    conn.close()


seed_db()
