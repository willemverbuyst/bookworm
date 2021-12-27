import psycopg2
from database.python.helpers.format_data import format_user

def get_user_from_db(email, password):
    conn = psycopg2.connect(
        database="postgres",
        user="dbuser",
        password="admin2021",
        host="database",
        port="5432",
    )

    cursor = conn.cursor()

    cursor.execute("SELECT * FROM user_account WHERE user_account_email=%s AND user_account_password=%s",(email,password,))

    data = cursor.fetchone()
    conn.close()

    if (data):
        return format_user(data)
    else:
        return None


    
