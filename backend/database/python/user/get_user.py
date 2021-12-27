import psycopg2
import os
from database.python.helpers.sql_helpers import executeScriptsFromFile
from database.python.helpers.format_data import format_user

dirname = os.path.dirname(__file__)
select_user_sql = os.path.join(dirname, "../../sql/user/select_user.sql")


def get_user_from_db():
    conn = psycopg2.connect(
        database="postgres",
        user="dbuser",
        password="admin2021",
        host="database",
        port="5432",
    )

    cursor = conn.cursor()

    executeScriptsFromFile(select_user_sql, cursor)

    data = cursor.fetchone()
    conn.close()

    print(data)

    user_formatted = format_user(data)

    return user_formatted
