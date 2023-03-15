def format_authors(author_data):
    authors = []
    for row in author_data:
        author = {
            "id": row[0],
            "first_name": row[1],
            "last_name": row[2],
            "books_written": row[3],
        }
        authors.append(author)

    return authors


def format_books(book_data):
    books = []
    for row in book_data:
        book = {
            "id": row[0],
            "title": row[1],
            "year_published": row[2],
            "author": row[3],
            "genre": row[4],
            "language": row[5]
        }
        books.append(book)

    return books


def format_user(user_data):
    user = {
        "id": user_data[0],
        "first_name": user_data[1],
        "last_name": user_data[2],
        "email": user_data[3],
        "address": user_data[4],
        "postal_code": user_data[5],
        "phone": user_data[6],
        "city": user_data[7],
        "country": user_data[8],
    }

    return user


def format_genres(genre_data):
    genres = []
    for row in genre_data:
        genre = {
            "id": row[0],
            "genre": row[1],
        }
        genres.append(genre)

    return genres


def format_languages(language_data):
    languages = []
    for row in language_data:
        language = {
            "id": row[0],
            "language": row[1],
        }
        languages.append(language)

    return languages


def format_stats_languages(language_data):
    stats = []
    for row in language_data:
        data = {
            "id": row[0],
            "language": row[1],
            "number_of_books": row[2],
        }
        stats.append(data)

    return stats