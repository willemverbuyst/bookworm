from fastapi import FastAPI
from routers.root import root_router
from routers.books.main import book_router

app = FastAPI()

app.include_router(root_router)
app.include_router(book_router)
