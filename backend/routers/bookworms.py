from database.python.bookworm.get_bookworms import (
    get_bookworms_from_db, get_total_number_of_bookworms)
from error.main import raise_exception
from fastapi import APIRouter

bookworm_router = APIRouter()


@bookworm_router.get("/bookworms/", tags=["bookworms"])
def get_all_bookworms(limit = None, page = 1) -> dict:

    try:
        bookworms = get_bookworms_from_db(limit, page)
        result = len(bookworms)
        total_number_of_bookworms = get_total_number_of_bookworms()

        return {
            "status": "success",
            "result": result,
            "total_number_of_bookworms": total_number_of_bookworms,
            "data": bookworms,
            "message": "bookworms have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")