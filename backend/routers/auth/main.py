from fastapi import APIRouter
from routers.auth.login import login_router


auth_router = APIRouter()

auth_router.include_router(login_router)
