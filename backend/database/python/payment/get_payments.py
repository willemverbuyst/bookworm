import os

import psycopg2
from database.python.helpers.sql_helpers import create_connection
from database.python.payment.helpers import format_payments

dirname = os.path.dirname(__file__)
select_count_payments_sql = os.path.join(
    dirname, "../../sql/payment/select_count_payments.sql"
)
select_payments_sql = os.path.join(dirname, "../../sql/payment/select_payments.sql")


def get_payments_from_db(amount):
    conn = create_connection()

    sql_file = open(select_payments_sql, "r")
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (amount,))

    data = cursor.fetchall()
    conn.close()

    payments_formatted = format_payments(data)

    return payments_formatted


def get_total_number_of_payments():
    conn = create_connection()

    sql_file = open(select_count_payments_sql, "r")
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    result = cursor.fetchone()
    conn.close()

    return result[0]
