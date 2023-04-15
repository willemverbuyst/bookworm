from database.python.rental.get_rentals import (
    get_rental_stats_day_from_db, get_rental_stats_duration_from_db,
    get_rentals_from_db, get_total_number_of_rentals)
from error.main import raise_exception
from fastapi import APIRouter

rental_router = APIRouter()


@rental_router.get("/rentals", tags=["rentals"])
def get_rentals(limit = None, page=1, filter = None) -> dict:
    try:
        rentals = get_rentals_from_db(limit, page, filter)
        total_number_of_rentals = get_total_number_of_rentals(filter)
        result = len(rentals)

        return {
            "status": "success",
            "result": result,
            "data": rentals,
            "total": total_number_of_rentals,
            "message": "rentals have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")


@rental_router.get("/rentals/stats/", tags=["rentals"])
def get_rentals_stats(by = None) -> dict:

    try:
        if (by == "duration"):
            stats = get_rental_stats_duration_from_db()
        if (by == "day"):
            stats = get_rental_stats_day_from_db()
        else:
            stats = []

        
        return {
            "status": "success",
            "data": stats,
            "message": "stats have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")