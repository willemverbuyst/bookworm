from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.root import root_router
from routers.auth.main import auth_router
from routers.authors import author_router
from routers.books import book_router
from routers.reviews.main import review_router
from routers.users.main import user_router


origins = ["http://0.0.0.0:3000", "http://localhost:3000"]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(root_router)
app.include_router(auth_router)
app.include_router(author_router)
app.include_router(book_router)
app.include_router(review_router)
app.include_router(user_router)
