from auth.auth_handler import decodeJWT, signJWT
from database.python.user.get_user import (get_user_from_db,
                                           get_user_from_db_by_email)
from error.main import raise_exception
from fastapi import APIRouter, Body, HTTPException, status
from models.user import CredentialsSchema, TokenSchema, UserSchema

user_router = APIRouter()


@user_router.post("/user/login", tags=["user"])
def login_user(credentials: CredentialsSchema = Body(...)) -> dict:
    user = get_user_from_db(credentials.email, credentials.password)
    if user:
        return {
            "status": "success",
            "data": user,
            "token": signJWT(user["email"]),
            "message": "Welcome back",
        }
    else:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, detail="user with this email and/or password not found")



@user_router.post("/user/signup", tags=["user"])
async def create_user(user: UserSchema = Body(...)):
    
    return signJWT(user.email)


@user_router.post("/user/me", tags=["user"])
def login_user(credentials: TokenSchema = Body(...)) -> dict:
    decoded_token = decodeJWT(credentials.token)

    if not decoded_token:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, detail="invalid token")

    email = decoded_token["user_id"]
    
    if not email:
        raise HTTPException(status.HTTP_401_UNAUTHORIZED, detail="invalid token")

    user = get_user_from_db_by_email(email)
    
    if user:
        return {
            "status": "success",
            "data": user,
            "token": signJWT(user["email"]),
            "message": "Welcome back",
        }
    else:
        raise HTTPException(status.HTTP_500_INTERNAL_SERVER_ERROR, "Something went very wrong!")
    

