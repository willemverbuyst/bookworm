import os

import psycopg2
from database.python.helpers.sql_helpers import create_connection
from database.python.review.helpers import format_reviews

dirname = os.path.dirname(__file__)
select_count_reviews_sql = os.path.join(dirname, "../../sql/review/select_count_reviews.sql")
select_reviews_sql = os.path.join(dirname, "../../sql/review/select_reviews.sql")


def get_reviews_from_db(limit, page):
    conn = create_connection()

    if limit:
        offset = int(limit) * (int(page) - 1)
    else:
        offset = 0

    sql_file = open(select_reviews_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (limit, offset))

    data = cursor.fetchall()
    conn.close()

    reviews_formatted = format_reviews(data)

    return reviews_formatted


def get_total_number_of_reviews():
    conn = create_connection()
    
    sql_file = open(select_count_reviews_sql, 'r')
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql)

    result = cursor.fetchone()
    conn.close()

    return result[0]