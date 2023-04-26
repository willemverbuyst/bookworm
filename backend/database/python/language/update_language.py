import os

import psycopg2
from database.python.helpers.sql_helpers import create_connection
from database.python.language.get_language_by_id import get_language_by_id_from_db
from database.python.language.helpers import format_language

dirname = os.path.dirname(__file__)
update_language_sql = os.path.join(dirname, "../../sql/language/update_language.sql")


def update_language_in_db(id, language):
    conn = create_connection()

    sql_file = open(update_language_sql, "r")
    raw_sql = sql_file.read()
    sql_file.close()

    cursor = conn.cursor()
    cursor.execute(raw_sql, (language, id))

    conn.commit()
    conn.close()

    return get_language_by_id_from_db(id)
