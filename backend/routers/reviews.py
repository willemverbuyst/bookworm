from auth.auth_bearer import JWTBearer
from error.main import raise_exception
from fastapi import APIRouter, Depends
from models.review import ReviewSchema

review_router = APIRouter()


@review_router.get("/reviews", tags=["reviews"])
def get_reviews() -> dict:
    data = []
    result = 0
    message = "Route not implemented"

    try:
        return {
            "status": "success",
            "result": result,
            "data": data,
            "message": message,
        }
    except:
        raise_exception(500, "Something went very wrong!")
        

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
