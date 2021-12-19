from fastapi import APIRouter
import csv
import uuid
from error.main import raise_exception

get_books_router = APIRouter()


def get_books():
    books = []
    with open("dummy_data/books.csv") as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=",")
        for row in csv_reader:
            book = {
                "id": uuid.uuid4(),
                "title": row[0],
                "language": row[1],
                "author": row[2],
                "year": int(row[3]),
                "read": bool(row[4]),
            }
            books.append(book)

    return books


@get_books_router.get("/books")
def get_all_books():
    try:
        all_books = get_books()
        result = len(all_books)

        return {
            "status": "succes",
            "result": result,
            "data": all_books,
            "message": "all books have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")
