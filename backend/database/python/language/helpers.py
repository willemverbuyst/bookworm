def format_languages(language_data):
    languages = []
    for row in language_data:
        language = {
            "id": row[0],
            "language": row[1],
        }
        languages.append(language)

    return languages