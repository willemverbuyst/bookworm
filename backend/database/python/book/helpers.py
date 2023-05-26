def format_books(book_data):
    books = []
    for row in book_data:
        book = {
            "id": row[0],
            "title": row[1],
            "year_published": row[2],
            "author": row[3],
            "genre": row[4],
            "language": row[5],
        }
        books.append(book)

    return books


def format_books_for_author(book_data):
    books = []
    for row in book_data:
        book = {"id": row[0], "title": row[1]}
        books.append(book)

    return books


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


def format_stats_year_published(year_published_data):
    stats = []
    for row in year_published_data:
        data = {
            "year_published": row[0],
            "number_of_books": row[1],
        }
        stats.append(data)

    return stats
