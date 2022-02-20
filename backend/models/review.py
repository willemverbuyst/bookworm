from pydantic import BaseModel, Field, EmailStr


class ReviewSchema(BaseModel):
    id: int = Field(default=None)
    author: str = Field(...)
    book_title: str = Field(...)
    review: str = Field(...)
    rating: int = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "author": "Name of the author.",
                "book_title": "Title of the book." ,
                "review": "Review of the book.",
                "rating": 5
            }
        }
