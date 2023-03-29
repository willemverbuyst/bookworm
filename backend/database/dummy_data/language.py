import datetime


def create_insert_languages_sql(config):
    print("[INFO] Creating 'insert_languages.sql'")
    with open('insert_languages.sql', 'w') as file:
        insert_statements = ""
        for i in config.get("LANGUAGE"):
            language_id = i.get("uuid")
            language = i.get("language")
            last_updated = datetime.datetime.now() 
      
            sql = "INSERT INTO language (language_id,language,last_updated)" \
                f"VALUES ('{language_id}'::UUID,'{language}','{last_updated}');\n"
            insert_statements += sql

        file.write(insert_statements)


