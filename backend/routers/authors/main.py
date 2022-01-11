from fastapi import APIRouter
from routers.authors.get_authors import get_authors_router


author_router = APIRouter()

author_router.include_router(get_authors_router)
