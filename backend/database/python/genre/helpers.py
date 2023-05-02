def format_genres(genre_data):
    genres = []
    for row in genre_data:
        genre = {
            "id": row[0],
            "name_of_genre": row[1],
        }
        genres.append(genre)

    return genres


def format_genre(genre_data):
    genre = {"id": genre_data[0], "name_of_genre": genre_data[1]}
    return genre
