import os

import psycopg2
from database.python.country.helpers import format_countries
from database.python.helpers.sql_helpers import create_connection

dirname = os.path.dirname(__file__)
select_countries_sql = os.path.join(dirname, "../../sql/country/select_countries.sql")


def get_countries_from_db():
    conn = create_connection()

    sql_file = open(select_countries_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    data = cursor.fetchall()

    conn.close()

    countries_formatted = format_countries(data)

    return countries_formatted

