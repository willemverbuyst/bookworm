import datetime
import random

import config

with open('insert_language.sql', 'w') as file:
    insert_statements = ""
    for i in range(len(config.LANGUAGES)):
        language_id =  str(config.UUIDS_LANGUAGES[i])
        language = config.LANGUAGES[i]
        last_updated = datetime.datetime.now() 
  
        sql = "INSERT INTO language (language_id, language, last_updated)" \
            f"VALUES ('{language_id}'::UUID, '{language}', '{last_updated}');\n"
        insert_statements += sql

    file.write(insert_statements)


