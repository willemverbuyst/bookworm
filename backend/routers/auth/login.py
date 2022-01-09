import uuid
import csv
from fastapi import APIRouter
from pydantic import BaseModel
from error.main import raise_exception
from database.python.user.get_user import get_user_from_db


class Credentials(BaseModel):
    email: str
    password: str


login_router = APIRouter()


@login_router.post("/login")
def login_user(credentials: Credentials):
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
                "message": "User found.",
            }
        else:
            return {
                "Status": "fail",
                "data": None,
                "message": "User with this email and password not found!",
            }
    except:
        raise_exception(500, "Something went very wrong!")
