from database.python.bookworm.get_bookworms import (
    get_bookworm_details_from_db_by_id, get_bookworms_from_db,
    get_total_number_of_bookworms)
from error.main import raise_exception
from fastapi import APIRouter

bookworm_router = APIRouter()


@bookworm_router.get("/bookworms/", tags=["bookworms"])
def get_bookworms(limit = None, page = 1) -> dict:

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


@bookworm_router.get("/bookworms/{id}", tags=["bookworms"])
def get_bookworm_by_id(id) -> dict:
    try:
        bookworm = get_bookworm_details_from_db_by_id(id)

        if bookworm:
            return {
                "status": "success",
                "data": bookworm,
                "message": "bookworm has been fetched",
            }
        else:
            return{
                "status": "fail",
                "data": None,
                "message": "No details found for this bookworm"
            }

    except:
        raise_exception(500, "Something went wrong!")