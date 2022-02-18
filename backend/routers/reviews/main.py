from fastapi import APIRouter
from routers.reviews.post_review import post_review_router


review_router = APIRouter()

review_router.include_router(post_review_router)
