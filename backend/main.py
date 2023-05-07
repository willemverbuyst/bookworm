from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.authors import author_router
from routers.books import book_router
from routers.bookworms import bookworm_router
from routers.countries import country_router
from routers.genres import genre_router
from routers.languages import language_router
from routers.libraries import library_router
from routers.payments import payment_router
from routers.rentals import rental_router
from routers.reviews import review_router
from routers.root import root_router
from routers.user import user_router

origins = ["http://0.0.0.0:3000", "http://localhost:3000", "http://frontend:3000"]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(root_router)
app.include_router(author_router)
app.include_router(book_router)
app.include_router(bookworm_router)
app.include_router(country_router)
app.include_router(genre_router)
app.include_router(language_router)
app.include_router(library_router)
app.include_router(payment_router)
app.include_router(rental_router)
app.include_router(review_router)
app.include_router(user_router)
