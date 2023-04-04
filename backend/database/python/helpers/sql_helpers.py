import os

import psycopg2

dirname = os.path.dirname(__file__)

def create_connection():
    DATABASE = os.environ.get("DATABASE")
    DATABASE_USER = os.environ.get("DATABASE_USER")
    DATABASE_PASSWORD = os.environ.get("DATABASE_PASSWORD")
    DATABASE_HOST = os.environ.get("DATABASE_HOST")
    DATABASE_PORT = os.environ.get("DATABASE_PORT")

    conn = psycopg2.connect(
        database=DATABASE,
        user=DATABASE_USER,
        password=DATABASE_PASSWORD,
        host=DATABASE_HOST,
        port=DATABASE_PORT,
    )

    return conn


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
