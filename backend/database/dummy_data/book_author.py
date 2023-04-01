import datetime
import random


def create_dummy_book_author_sql(config):
    print("[INFO] Creating dummy data for book_author table")
    insert_statements = ""
    for i in config.get("BOOK_AUTHOR"):
        book_author_id = i.get("uuid")
        last_updated = datetime.datetime.now() 
        book_id = (config.get("BOOK")[random.randint(0,len(config.get("BOOK")) - 1)]).get("uuid")
        author_id = (config.get("AUTHOR")[random.randint(0,len(config.get("AUTHOR")) - 1)]).get("uuid")

        sql = "INSERT INTO book_author (book_author_id,last_updated,book_id,author_id) " \
            f"VALUES ('{book_author_id}'::UUID,'{last_updated}','{book_id}'::UUID,'{author_id}'::UUID);\n"
        insert_statements += sql

    print("[INFO] Write to 'insert_book_author.sql'")
    with open('insert_book_author.sql', 'w') as file:
        file.write(insert_statements)
