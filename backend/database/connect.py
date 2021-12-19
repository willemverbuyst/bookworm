import psycopg2

conn = psycopg2.connect(
    database="postgres",
    user="dbuser",
    password="admin2021",
    host="database",
    port="5432",
)

command1 = """
CREATE TABLE IF NOT EXISTS book (
  book_id INT NOT NULL,
  book_title VARCHAR(250) NOT NULL,
  book_language VARCHAR(250) NOT NULL,
  book_author VARCHAR(250) NOT NULL,
  book_year INT NOT NULL,
  book_read BOOL NOT NULL,
  PRIMARY KEY (book_id)
);
"""

command2 = """
INSERT INTO book VALUES(1,'Alleen maar nette mensen','NL','Robert Vuijsje',2020,true)
"""

command3 = """
SELECT COUNT(*) FROM book
"""

cursor = conn.cursor()

cursor.execute(command1)
cursor.execute(command2)
cursor.execute(command3)

data = cursor.fetchone()
print(data)

conn.close()
