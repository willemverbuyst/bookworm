def format_countries(country_data):
    countries = []
    for row in country_data:
        country = {
            "id": row[0],
            "country": row[1],
        }
        countries.append(country)

    return countries