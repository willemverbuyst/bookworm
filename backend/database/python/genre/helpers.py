def format_genres(genre_data):
    genres = []
    for row in genre_data:
        genre = {
            "id": row[0],
            "genre": row[1],
        }
        genres.append(genre)

    return genres
