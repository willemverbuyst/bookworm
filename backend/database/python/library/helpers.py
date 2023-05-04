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


def format_library(library_data):
    library = {
        "id": library_data[0],
        "name_of_library": library_data[1],
        "phone": library_data[2],
        "address": library_data[3],
        "postal_code": library_data[4],
        "city": library_data[5],
        "country": library_data[6],
    }

    return library
