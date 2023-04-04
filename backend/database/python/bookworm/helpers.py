def format_bookworms(bookworm_data):
    bookworms = []
    for row in bookworm_data:
        bookworm = {
            "id": row[0],
            "first_name": row[1],
            "last_name": row[2],
            "email": row[3],
            "phone": row[4],
            "user_is_active": row[5],
            "library_name": row[6]
        }
        bookworms.append(bookworm)

    return bookworms
