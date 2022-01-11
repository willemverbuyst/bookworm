from fastapi import APIRouter
import csv
import uuid
from error.main import raise_exception
from database.python.book.get_books import get_books_from_db

get_books_router = APIRouter()


@get_books_router.get("/books")
def get_all_books():
    try:
        books = get_books_from_db()
        result = len(books)

        return {
            "status": "success",
            "result": result,
            "data": books,
            "message": "all books have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")
