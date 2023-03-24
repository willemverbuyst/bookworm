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


def format_bookworms(bookworm_data):
    bookworms = []
    for row in bookworm_data:
        bookworm = {
            "id": row[0],
            "first_name": row[1],
            "last_name": row[2],
            "birth_date": row[3],
            "email": row[4],
            "phone": row[5],
            "address": row[6],
            "postal_code": row[7],
            "city": row[6],
            "country": row[9],
            "user_is_active": row[10],
            "library_name": row[11]
        }
        bookworms.append(bookworm)

    return bookworms


def format_user(user_data):
    user = {
        "id": user_data[0],
        "first_name": user_data[1],
        "last_name": user_data[2],
        "birth_date": user_data[3],
        "email": user_data[4],
        "phone": user_data[5],
        "address": user_data[6],
        "postal_code": user_data[7],
        "city": user_data[8],
        "country": user_data[9],
        "library_name": user_data[10],
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


def format_stats_genres(genre_data):
    stats = []
    for row in genre_data:
        data = {
            "id": row[0],
            "genre": row[1],
            "number_of_books": row[2],
        }
        stats.append(data)

    return stats


def format_stats_pages(page_data):
    stats = []
    for row in page_data:
        data = {
            "id": row[0],
            "author": row[1],
            "number_of_pages": row[2],
        }
        stats.append(data)

    return stats