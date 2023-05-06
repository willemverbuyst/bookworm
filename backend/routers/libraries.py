import uuid

from database.python.library.add_library import add_library_to_db
from database.python.library.get_libraries import (
    get_libraries_from_db,
    get_library_by_id_from_db,
    get_total_number_of_libraries,
)
from error.main import raise_exception
from fastapi import APIRouter, HTTPException, status

library_router = APIRouter()


@library_router.get("/libraries", tags=["libraries"])
def get_all_libraries(limit=None, page=1) -> dict:
    try:
        libraries = get_libraries_from_db(limit, page)
        total_number_of_libraries = get_total_number_of_libraries()

        return {
            "status": "success",
            "result": total_number_of_libraries,
            "data": libraries,
            "total": total_number_of_libraries,
            "message": "all libraries have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")


@library_router.get("/libraries/{id}", tags=["libraries"])
def get_library_by_id(id) -> dict:
    try:
        library = get_library_by_id_from_db(id)
    except:
        raise_exception(500, "Something went wrong!")

    if library:
        return {
            "status": "success",
            "data": library,
            "message": "all libraries have been fetched",
        }

    else:
        raise HTTPException(status.HTTP_404_NOT_FOUND, detail="library not found")


@library_router.post("/libraries", tags=["libraries"])
def add_library(library: str, address_id: str) -> dict:
    try:
        new_id = uuid.uuid4()

        add_library_to_db(new_id, library, address_id)

        return {
            "status": "success",
            "message": "library has been added",
        }
    except:
        raise_exception(500, "Something went wrong!")
