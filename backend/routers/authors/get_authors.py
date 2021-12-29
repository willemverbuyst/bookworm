from fastapi import APIRouter
import csv
import uuid
from error.main import raise_exception
from database.python.author.get_authors import get_authors_from_db

get_authors_router = APIRouter()


@get_authors_router.get("/authors")
def get_all_authors():
    try:
        authors = get_authors_from_db()
        result = len(authors)

        return {
            "status": "success",
            "result": result,
            "data": authors,
            "message": "all authors have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")
