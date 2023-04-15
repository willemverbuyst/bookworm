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


def format_rental_stats_duration(rental_data):
    rentals = []
    for row in rental_data:
        rental = {
            "duration": row[0],
            "total_rentals": row[1]
        }
        rentals.append(rental)

    return rentals


def format_rental_stats_days(rental_data):
    rentals = []
    for row in rental_data:
        rental = {
            "number_of_rentals": row[0],
            "number_of_returns": row[1],
            "day_of_the_week": row[2]
        }
        rentals.append(rental)

    return rentals