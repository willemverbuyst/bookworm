from fastapi import APIRouter
from error.main import raise_exception
from database.python.book.get_books import (
    get_book_stats_genre_from_db,
    get_book_stats_language_from_db,
    get_books_from_db, 
    get_books_from_db_by_genre, 
    get_books_from_db_by_genre_and_language, 
    get_books_from_db_by_language,
    get_total_number_of_books
)


book_router = APIRouter()


@book_router.get("/books/", tags=["books"])
def get_all_books(genre = None, language = None) -> dict:

    try:
        if genre and language:
            books = get_books_from_db_by_genre_and_language(genre, language)
        elif genre:
            books = get_books_from_db_by_genre(genre)
        elif language:
            books = get_books_from_db_by_language(language)
        else:
            books = get_books_from_db()
        
        result = len(books)

        total_number_of_books = get_total_number_of_books()

        return {
            "status": "success",
            "result": result,
            "total_number_of_books": total_number_of_books,
            "data": books,
            "message": "books have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")

@book_router.get("/books/stats/", tags=["books"])
def get_books_stats(by = None) -> dict:

    try:
        if (by == "language"):
            stats = get_book_stats_language_from_db()
        elif (by == "genre"):
            stats = get_book_stats_genre_from_db()
        else:
            stats = []

        
        return {
            "status": "success",
            "data": stats,
            "message": "stats have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")