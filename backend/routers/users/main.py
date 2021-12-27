from fastapi import APIRouter
from routers.users.get_user import get_user_router


user_router = APIRouter()

user_router.include_router(get_user_router)
