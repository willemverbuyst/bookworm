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
