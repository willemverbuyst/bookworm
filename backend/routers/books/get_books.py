from fastapi import APIRouter

get_books_router = APIRouter()


@get_books_router.get("/books")
def get_all_books():
    try:
        all_books = ["book1", "book2"]
        result = len(all_books)

        return {
            "status": "succes",
            "result": result,
            "data": all_books,
            "message": "all books have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")