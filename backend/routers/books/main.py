from fastapi import APIRouter
from routers.books.get_books import get_books_router


book_router = APIRouter()

book_router.include_router(get_books_router)
