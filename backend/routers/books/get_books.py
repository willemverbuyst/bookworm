from fastapi import APIRouter
import csv
import uuid
from error.main import raise_exception
from database.connect import get_books_from_db

get_books_router = APIRouter()


def get_books():
    books = []
    with open("dummy_data/books.csv") as csv_file:
        csv_reader = csv.reader(csv_file, delimiter="|")

        for row in csv_reader:
            book = {
                "id": uuid.uuid4(),
                "title": row[0],
                "language": row[1],
                "author": row[2],
                "year": int(row[3]),
                "read": int(row[4]),
            }
            books.append(book)

    return books


@get_books_router.get("/books")
def get_all_books():
    try:
        all_books = get_books_from_db()
        result = len(all_books)

        books = []
        for book in all_books:
            book = {
                "id": book[0],
                "title": book[1],
                "language": book[2],
                "author": book[3],
                "year": book[4],
                "read": book[5],
            }
            books.append(book)


        return {
            "status": "succes",
            "result": result,
            "data": books,
            "message": "all books have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")
