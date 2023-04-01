import datetime


def create_dummy_languages_sql(config):
    print("[INFO] Create dummy data for language table")
    insert_statements = ""
    for i in config.get("LANGUAGE"):
        language_id = i.get("uuid")
        language = i.get("language")
        last_updated = datetime.datetime.now() 
    
        sql = "INSERT INTO language (language_id,language,last_updated) " \
            f"VALUES ('{language_id}'::UUID,'{language}','{last_updated}');\n"
        insert_statements += sql

    print("[INFO] Write to 'insert_languages.sql'")
    with open('insert_languages.sql', 'w') as file:
        file.write(insert_statements)


