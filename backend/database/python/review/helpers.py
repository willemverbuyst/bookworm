def format_reviews(review_data):
    reviews = []
    for row in review_data:
        review = {
            "id": row[0],
        }
        reviews.append(review)

    return reviews