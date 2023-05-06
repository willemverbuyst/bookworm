def format_user(user_data):
    user = {
        "id": user_data[0],
        "first_name": user_data[1],
        "last_name": user_data[2],
        "birth_date": user_data[3],
        "place_of_birth": user_data[4],
        "email": user_data[5],
        "phone": user_data[6],
        "address": user_data[7],
        "postal_code": user_data[8],
        "city": user_data[9],
        "country": user_data[10],
        "library": user_data[11],
    }

    return user
