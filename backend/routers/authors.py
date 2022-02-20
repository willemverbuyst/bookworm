from fastapi import APIRouter
from database.python.author.get_authors import get_authors_from_db
from error.main import raise_exception
from models.author import AuthorSchema

author_router = APIRouter()


@author_router.get("/authors", tags=["authors"])
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


@author_router.post("/authors", tags=["authors"])
def add_author(authors: AuthorSchema) -> dict:
    try:
        message =  "Route not implemented"

        return {
            "status": "success",
            "data": author,
            "message": message,
        }
    except:
        raise_exception(500, "Something went wrong!")