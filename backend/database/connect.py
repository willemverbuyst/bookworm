import psycopg2
import os

dirname = os.path.dirname(__file__)
create_table_sql = os.path.join(dirname, './create_table.sql')
books_sql = os.path.join(dirname, './books.sql')


conn = psycopg2.connect(
    database="postgres",
    user="dbuser",
    password="admin2021",
    host="database",
    port="5432",
) 

cursor = conn.cursor()

command3 = """
SELECT * FROM book
"""


def executeScriptsFromFile(filename):
    with open(create_table_sql, 'r') as sqlFile:
        lines = sqlFile.read().splitlines()

        for command in lines:
            try:
                cursor.execute(command)
            except psycopg2.OperationalError as e:
                print("Command skipped: ", e)



def get_books_from_db():
    conn = psycopg2.connect(
    database="postgres",
    user="dbuser",
    password="admin2021",
    host="database",
    port="5432",
) 

    cursor = conn.cursor()
    
    print("enter")

    with open(create_table_sql, 'r') as sqlFile:
        lines = sqlFile.read().splitlines()

        for command in lines:
            try:
                cursor.execute(command)
            except psycopg2.OperationalError as e:
                print("Command skipped: ", e)

    with open(books_sql, 'r') as sqlFile:
        lines = sqlFile.read().splitlines()

        for command in lines:
            try:
                cursor.execute(command)
            except psycopg2.OperationalError as e:
                print("Command skipped: ", e)


    cursor.execute(command3)

    data = cursor.fetchall()
    conn.close()

    
    return data


