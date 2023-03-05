from fastapi import APIRouter, Body
from error.main import raise_exception
from database.python.user.get_user import get_user_from_db, get_user_from_db_by_email
from models.user import CredentialsSchema, TokenSchema, UserSchema
from auth.auth_handler import decodeJWT, signJWT


user_router = APIRouter()


@user_router.post("/user/login", tags=["user"])
def login_user(credentials: CredentialsSchema = Body(...)) -> dict:
    try:
        user = get_user_from_db(credentials.email, credentials.password)
        if user:
            return {
                "status": "success",
                "data": {
                    "id": user["id"],
                    "first_name": user["first_name"],
                    "last_name": user["last_name"],
                    "username": user["username"],
                    "email": user["email"],
                    "address": user["address"],
                    "postal_code": user["postal_code"],
                    "phone": user["phone"],
                    "city": user["city"],
                    "country": user["country"],
                },
                "token": signJWT(user["email"]),
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


@user_router.post("/user/signup", tags=["user"])
async def create_user(user: UserSchema = Body(...)):
    
    return signJWT(user.email)


@user_router.post("/user/me", tags=["user"])
def login_user(credentials: TokenSchema = Body(...)) -> dict:
    try:
        email = decodeJWT(credentials.token)["user_id"]
        user = get_user_from_db_by_email(email)
        if user:
            return {
                "status": "success",
                "data": {
                    "id": user["id"],
                    "first_name": user["first_name"],
                    "last_name": user["last_name"],
                    "username": user["username"],
                    "email": user["email"],
                    "address": user["address"],
                    "postal_code": user["postal_code"],
                    "phone": user["phone"],
                    "city": user["city"],
                    "country": user["country"],
                },
                "token": signJWT(user["email"]),
                "message": "Welcome back",
            }
        else:
            return {
                "Status": "fail",
                "data": None,
                "message": "Invalid token",
            }
    except:
        raise_exception(500, "Something went very wrong!")