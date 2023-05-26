from database.python.book.get_books import (
    get_book_stats_genre_from_db,
    get_book_stats_language_from_db,
    get_book_stats_year_published_from_db,
    get_books_from_db,
    get_total_number_of_books,
)
from database.python.book.get_books_by_author import get_books_by_author_id_from_db
from error.main import raise_exception
from fastapi import APIRouter

book_router = APIRouter()


@book_router.get("/books/", tags=["books"])
def get_books(author_id=None, genre=None, language=None, limit=None, page=1) -> dict:
    if author_id:
        books = get_books_by_author_id_from_db(author_id)

        return {
            "status": "success",
            "result": len(books),
            "data": books,
            "message": "books have been fetched",
        }

    elif not author_id:
        books = get_books_from_db(genre, language, limit, page)
        result = len(books)
        total_number_of_books = get_total_number_of_books(genre, language)

        return {
            "status": "success",
            "result": result,
            "data": books,
            "total": total_number_of_books,
            "message": "books have been fetched",
        }
    else:
        raise_exception(500, "Something went wrong!")


@book_router.get("/books/stats/", tags=["books"])
def get_books_stats(by=None) -> dict:
    try:
        if by == "language":
            stats = get_book_stats_language_from_db()
        elif by == "genre":
            stats = get_book_stats_genre_from_db()
        elif by == "year_published":
            stats = get_book_stats_year_published_from_db()
        else:
            stats = []

        return {
            "status": "success",
            "result": len(stats),
            "data": stats,
            "message": "stats have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")
