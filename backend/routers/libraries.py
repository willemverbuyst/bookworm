from database.python.library.get_libraries import (
    get_libraries_from_db, get_total_number_of_libraries)
from error.main import raise_exception
from fastapi import APIRouter

library_router = APIRouter()


@library_router.get("/libraries", tags=["libraries"])
def get_all_libraries(limit = None, page=1) -> dict:
    try:
        libraries = get_libraries_from_db(limit, page)
        total_number_of_libraries = get_total_number_of_libraries()

        return {
            "status": "success",
            "total_number_of_libraries": total_number_of_libraries,
            "data": libraries,
            "message": "all libraries have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")
