import os

import psycopg2
from database.python.helpers.sql_helpers import create_connection
from database.python.language.helpers import format_language

dirname = os.path.dirname(__file__)
select_language_by_id_sql = os.path.join(
    dirname, "../../sql/language/select_language_by_id.sql"
)


def get_language_by_id_from_db(id):
    conn = create_connection()

    sql_file = open(select_language_by_id_sql, "r")
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (id,))

    data = cursor.fetchone()

    conn.close()

    if data:
        return format_language(data)
    else:
        return None
