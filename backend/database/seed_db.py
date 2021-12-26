import psycopg2
import os
from helpers.sql_helpers import executeScriptsFromFile

dirname = os.path.dirname(__file__)
create_table_sql = os.path.join(dirname, "./sql/create_table.sql")
insert_books_sql = os.path.join(dirname, "./sql/insert_books.sql")
select_all_sql = os.path.join(dirname, "./sql/select_all.sql")


def get_books_from_db():
    conn = psycopg2.connect(
        database="postgres",
        user="dbuser",
        password="admin2021",
        host="database",
        port="5432",
    )

    cursor = conn.cursor()

    executeScriptsFromFile(create_table_sql, cursor)
    executeScriptsFromFile(insert_books_sql, cursor)

    conn.commit()
    conn.close()


get_books_from_db()
