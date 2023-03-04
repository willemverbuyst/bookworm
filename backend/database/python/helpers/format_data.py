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
            "language": row[2],
            "author": row[8] + " " + row[9],
            "year": row[4],
            "read": row[5],
        }
        books.append(book)

    return books


def format_user(user_data):
    user = {
        "id": user_data[0],
        "first_name": user_data[2],
        "last_name": user_data[3],
        "username": user_data[4],
        "email": user_data[5],
        "address": user_data[6],
        "postal_code": user_data[7],
        "phone": user_data[8],
        "city": user_data[9],
        "country": user_data[10],
    }

    return user
