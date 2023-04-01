import datetime


def create_dummy_genres_sql(config):
    print("[INFO] Create dummy data for genre table")
    insert_statements = ""
    for i in config.get("GENRE"):
        genre_id = i.get("uuid")
        genre = i.get("genre")
        last_updated = datetime.datetime.now() 
    
        sql = "INSERT INTO genre (genre_id,genre,last_updated) " \
            f"VALUES ('{genre_id}'::UUID,'{genre}','{last_updated}');\n"
        insert_statements += sql

    return insert_statements
    

