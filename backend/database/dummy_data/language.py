import datetime


def create_dummy_languages_sql(config):
    print("[INFO] Create dummy data for language table")
    insert_statements = ""
    for i in config.get("LANGUAGE"):
        language_id = i.get("uuid")
        name_of_language = i.get("language")
        last_updated = datetime.datetime.now()

        sql = (
            "INSERT INTO language (language_id,name_of_language,last_updated) "
            f"VALUES ('{language_id}'::UUID,'{name_of_language}','{last_updated}');\n"
        )
        insert_statements += sql

    return insert_statements
