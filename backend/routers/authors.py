from database.python.author.get_authors import (
    get_author_stats_avg_pages_from_db,
    get_author_stats_page_from_db,
    get_authors_by_name_from_db,
    get_authors_from_db,
    get_total_number_of_authors,
)
from error.main import raise_exception
from fastapi import APIRouter, HTTPException, status
from models.author import AuthorSchema

author_router = APIRouter()


@author_router.get("/authors/", tags=["authors"])
def get_authors(name=None, limit=None, page=1) -> dict:
    if name:
        authors_by_name = get_authors_by_name_from_db(name)

        # if authors_by_name:
        result = len(authors_by_name)

        return {
            "status": "success",
            "result": result,
            "data": authors_by_name,
            "message": "all authors for this query have been fetched",
        }
        # else:
        #     raise HTTPException(status.HTTP_404_NOT_FOUND, "No authors found")

    authors = get_authors_from_db(limit, page)
    if authors:
        result = len(authors)
        total_number_of_authors = get_total_number_of_authors()

        return {
            "status": "success",
            "result": result,
            "data": authors,
            "total": total_number_of_authors,
            "message": "all authors have been fetched",
        }
    else:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "No authors found")


@author_router.post("/authors", tags=["authors"])
def add_author(authors: AuthorSchema) -> dict:
    try:
        message = "Route not implemented"

        return {
            "status": "success",
            "data": author,
            "message": message,
        }
    except:
        raise_exception(500, "Something went wrong!")


@author_router.get("/author/stats/", tags=["authors"])
def get_author_stats(by=None) -> dict:
    try:
        if by == "page":
            stats = get_author_stats_page_from_db()
        else:
            stats = []

        avg_pages = get_author_stats_avg_pages_from_db()

        return {
            "status": "success",
            "data": {"pages_per_author": stats, "average_pages": avg_pages},
            "message": "stats have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")
