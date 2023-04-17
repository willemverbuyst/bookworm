import uuid

from database.python.country.get_countries import get_countries_from_db
from error.main import raise_exception
from fastapi import APIRouter

country_router = APIRouter()


@country_router.get("/countries", tags=["countries"])
def get_all_countries() -> dict:
    try:
        countries = get_countries_from_db()
        result = len(countries)

        return {
            "status": "success",
            "result": result,
            "data": countries,
            "total": result,
            "message": "all countries have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")

