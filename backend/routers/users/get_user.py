from fastapi import APIRouter
import csv
import uuid
from error.main import raise_exception
from database.python.user.get_user import get_user_from_db

get_user_router = APIRouter()


@get_user_router.get("/users")
def get_specific_user():
    try:
        user = get_user_from_db()
        
        return {
            "status": "succes",
            "data": user,
            "message": "User found.",
        }
    except:
        raise_exception(500, "Something went wrong!")
