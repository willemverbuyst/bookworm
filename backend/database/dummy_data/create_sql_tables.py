import os

import psycopg2
import psycopg2.extras

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
create_bookworm_table_sql = os.path.join(dirname, "../sql/bookworm/create_bookworm_table.sql")
create_inventory_table_sql = os.path.join(dirname, "../sql/inventory/create_inventory_table.sql")
create_review_table_sql = os.path.join(dirname, "../sql/review/create_review_table.sql")
create_rental_table_sql = os.path.join(dirname, "../sql/rental/create_rental_table.sql")
create_payment_table_sql = os.path.join(dirname, "../sql/payment/create_payment_table.sql")


def execute_script_from_file(filename, cursor):
    with open(filename, "r") as sqlFile:
        content = sqlFile.read()
        commands = content.split(";")

        for command in commands:
            try:
                if c := command.replace("\n", "").replace("\t", ""): 
                    cursor.execute(c)
            except psycopg2.OperationalError as e:
                print("Command skipped: ", e)


def create_sql_tables(cursor):
    print("[INFO] Create tables for DB")
    execute_script_from_file(create_country_table_sql, cursor)
    execute_script_from_file(create_city_table_sql, cursor)
    execute_script_from_file(create_address_table_sql, cursor)
    execute_script_from_file(create_language_table_sql, cursor)
    execute_script_from_file(create_rental_rate_table_sql, cursor)
    execute_script_from_file(create_genre_table_sql, cursor)
    execute_script_from_file(create_author_table_sql, cursor)
    execute_script_from_file(create_book_table_sql, cursor)
    execute_script_from_file(create_book_author_table_sql, cursor)
    execute_script_from_file(create_library_table_sql, cursor)
    execute_script_from_file(create_user_account_table_sql, cursor)
    execute_script_from_file(create_staff_table_sql, cursor)
    execute_script_from_file(create_bookworm_table_sql, cursor)
    execute_script_from_file(create_inventory_table_sql, cursor)
    execute_script_from_file(create_review_table_sql, cursor)
    execute_script_from_file(create_rental_table_sql, cursor)
    execute_script_from_file(create_payment_table_sql, cursor)