from auth.auth_bearer import JWTBearer
from database.python.review.get_reviews import (get_reviews_from_db,
                                                get_total_number_of_reviews)
from error.main import raise_exception
from fastapi import APIRouter, Depends
from models.review import ReviewSchema

review_router = APIRouter()


@review_router.get("/reviews", tags=["reviews"])
def get_reviews(limit = None, page=1) -> dict:
    try:
        reviews = get_reviews_from_db(limit, page)
        total_number_of_reviews = get_total_number_of_reviews()
        result = len(reviews)

        return {
            "status": "success",
            "result": result,
            "data": reviews,
            "total_number_of_reviews": total_number_of_reviews,
            "message": "reviews have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")
        

@review_router.post("/reviews", dependencies=[Depends(JWTBearer())], tags=["reviews"])
def add_review(review: ReviewSchema) -> dict:
    try:
        return {
            "status": "success",
            "data": None,
            "message": "Review posted",
        }
    except:
        raise_exception(500, "Something went very wrong!")
