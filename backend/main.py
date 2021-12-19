from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.root import root_router
from routers.books.main import book_router




origins = [
    "http://0.0.0.0:3000",
    "http://localhost:3000"
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(root_router)
app.include_router(book_router)

