from fastapi import APIRouter
from error.main import raise_exception
from database.python.book.get_books import get_books_from_db

book_router = APIRouter()


@book_router.get("/books", tags=["books"])
def get_all_books() -> dict:
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
