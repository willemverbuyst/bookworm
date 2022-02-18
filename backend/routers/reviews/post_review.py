from fastapi import APIRouter
from pydantic import BaseModel
from error.main import raise_exception


class Review(BaseModel):
    author: str
    book_title: str
    review: str
    rating: str


post_review_router = APIRouter()


@post_review_router.post("/reviews")
def post_review(review: Review):
    try:
        return {
            "Status": "succes",
            "data": None,
            "message": "Review posted",
        }
    except:
        raise_exception(500, "Something went very wrong!")
