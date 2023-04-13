from database.python.bookworm.get_bookworms import (
    get_bookworm_details_from_db_by_id, get_bookworm_stats_library_from_db,
    get_bookworms_from_db, get_total_number_of_bookworms)
from error.main import raise_exception
from fastapi import APIRouter

bookworm_router = APIRouter()


@bookworm_router.get("/bookworms/", tags=["bookworms"])
def get_bookworms(active, limit = None, page = 1) -> dict:

    try:
        bookworms = get_bookworms_from_db(limit, page, active)
        result = len(bookworms)
        total_number_of_bookworms = get_total_number_of_bookworms(active)

        return {
            "status": "success",
            "result": result,
            "data": bookworms,
            "total": total_number_of_bookworms,
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


@bookworm_router.get("/bookworms/stats/", tags=["bookworms"])
def get_bookworms_stats(by = None) -> dict:

    try:
        if (by == "library"):
            stats = get_bookworm_stats_library_from_db()
        else:
            stats = []

        return {
            "status": "success",
            "result": len(stats),
            "data": stats,
            "message": "stats have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")