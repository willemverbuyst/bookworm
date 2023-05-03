def format_libraries(library_data):
    libraries = []
    for row in library_data:
        library = {
            "id": row[0],
            "name_of_library": row[1],
            "phone": row[2],
            "address": row[3],
            "postal_code": row[4],
            "city": row[5],
            "country": row[6],
        }
        libraries.append(library)

    return libraries
