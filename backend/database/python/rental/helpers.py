def format_rentals(rental_data):
    rentals = []
    for row in rental_data:
        rental = {
            "id": row[0],
        }
        rentals.append(rental)

    return rentals