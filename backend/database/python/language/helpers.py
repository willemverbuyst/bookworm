def format_languages(language_data):
    languages = []
    for row in language_data:
        language = {
            "id": row[0],
            "language": row[1],
        }
        languages.append(language)

    return languages


def format_language(language_data):
    language = {"id": language_data[0], "language": language_data[1]}
    return language
