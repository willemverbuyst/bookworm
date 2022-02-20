from pydantic import BaseModel, Field, EmailStr


class CredentialsSchema(BaseModel):
    email: EmailStr = Field(...)
    password: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "email": "Email of user for login",
                "password": "Password for login" 
            }
        }
