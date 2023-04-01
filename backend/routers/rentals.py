from database.python.rental.get_rentals import (get_rentals_from_db,
                                                get_total_number_of_rentals)
from error.main import raise_exception
from fastapi import APIRouter

rental_router = APIRouter()


@rental_router.get("/rentals", tags=["rentals"])
def get_rentals(limit = None, page=1) -> dict:
    try:
        rentals = get_rentals_from_db(limit, page)
        total_number_of_rentals = get_total_number_of_rentals()

        return {
            "status": "success",
            "total_number_of_rentals": "total_number_of_rentals",
            "data": rentals,
            "message": "rentals have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")
