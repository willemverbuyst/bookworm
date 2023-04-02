def format_rentals(rental_data):
    rentals = []
    for row in rental_data:
        rental = {
            "id": row[0],
            "rental_date": row[1],
            "return_date": row[2],
            "title": row[3],
            "author": row[4]
        }
        rentals.append(rental)

    return rentals