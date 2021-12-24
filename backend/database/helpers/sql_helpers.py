import psycopg2


def executeScriptsFromFile(filename, cursor):
    with open(filename, "r") as sqlFile:
        lines = sqlFile.read().splitlines()

        for command in lines:
            try:
                cursor.execute(command)
            except psycopg2.OperationalError as e:
                print("Command skipped: ", e)
