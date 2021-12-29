def format_authors(author_data):
    authors = []
    for row in author_data:
        author = {
            "id": row[0],
            "author_name": row[1],
            "author_books_written": row[2],
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
            "author": row[3],
            "year": row[4],
            "read": row[5],
        }
        books.append(book)

    return books


def format_user(user_data):
    user = {
        "id": user_data[0],
        "username": user_data[1],
        "email": user_data[2],
    }

    return user

