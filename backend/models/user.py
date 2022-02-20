from pydantic import BaseModel, Field, EmailStr


class CredentialsSchema(BaseModel):
    email: EmailStr = Field(...)
    password: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "email": "ping@pong.io",
                "password": "test123" 
            }
        }

class UserSchema(BaseModel):
    user_name: str = Field(...)
    email: EmailStr = Field(...)
    password: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "user_name": "PingPongMan",
                "email": "ping@pong.io",
                "password": "test123"
            }
        }