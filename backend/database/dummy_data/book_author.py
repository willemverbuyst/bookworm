import datetime
import random


def create_dummy_book_author_sql(config):
    print("[INFO] Create dummy data for book_author table")
    insert_statements = ""
    for i, book in enumerate(config.get("BOOK")):
        book_author_id = (config.get("BOOK_AUTHOR")[i]).get("uuid")
        last_updated = datetime.datetime.now() 
        book_id = (config.get("BOOK")[i]).get("uuid")
        author_id = (config.get("AUTHOR")[random.randint(0,len(config.get("AUTHOR")) - 1)]).get("uuid")

        sql = "INSERT INTO book_author (book_author_id,last_updated,book_id,author_id) " \
            f"VALUES ('{book_author_id}'::UUID,'{last_updated}','{book_id}'::UUID,'{author_id}'::UUID);\n"
        insert_statements += sql

    return insert_statements
    