import psycopg2


def executeScriptsFromFile(filename, cursor):
    with open(filename, "r") as sqlFile:
        content = sqlFile.read()
        commands = content.split(";")

        for command in commands:
            try:
                if c := command.replace("\n", "").replace("\t", ""): 
                    cursor.execute(c)
            except psycopg2.OperationalError as e:
                print("Command skipped: ", e)
