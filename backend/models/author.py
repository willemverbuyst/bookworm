from pydantic import BaseModel, Field, EmailStr


class AuthorSchema(BaseModel):
    id: int = Field(default=None)
    name: str = Field(...)
    books_written: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "name": "Name of the author.",
                "content": "Number of boos written by the author." 
            }
        }
