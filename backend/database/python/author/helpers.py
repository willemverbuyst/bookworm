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


def format_stats_pages(page_data):
    stats = []
    for row in page_data:
        data = {
            "id": row[0],
            "author": row[1],
            "number_of_pages": row[2],
            "number_of_books": row[3]
        }
        stats.append(data)

    return stats