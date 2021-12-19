import psycopg2

conn = psycopg2.connect(
    database="postgres",
    user="dbuser",
    password="admin2021",
    host="database",
    port="5432",
)

cursor = conn.cursor()

cursor.execute("select version()")

data = cursor.fetchone()
print("Connection established to: ", data)

conn.close()
