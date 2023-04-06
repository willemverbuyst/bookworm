def format_reviews(review_data):
    reviews = []
    for row in review_data:
        review = {
            "id": row[0],
            "description": row[1],
            "rating": row[2],
            "book_title": row[3],
            "reviewer": row[4]
        }
        reviews.append(review)

    return reviews