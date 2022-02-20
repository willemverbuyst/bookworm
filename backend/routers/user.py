import uuid
import csv
from fastapi import APIRouter
from pydantic import BaseModel
from error.main import raise_exception
from database.python.user.get_user import get_user_from_db
from models.user import CredentialsSchema
from auth.auth_handler import signJWT


user_router = APIRouter()


@user_router.post("/user/login", tags=["user"])
def login_user(credentials: CredentialsSchema) -> dict:
    try:
        user = get_user_from_db(credentials.email, credentials.password)
        if user:
            return {
                "status": "success",
                "data": {
                    "id": user["id"],
                    "email": user["email"],
                    "user_name": user["username"],
                },
                "message": "Welcome back",
            }
        else:
            return {
                "Status": "fail",
                "data": None,
                "message": "User with this email and password not found!",
            }
    except:
        raise_exception(500, "Something went very wrong!")
