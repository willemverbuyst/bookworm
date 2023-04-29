from pydantic import BaseModel, Field


class GenreSchema(BaseModel):
    name: str


class GenresSchema(BaseModel):
    genres: list[GenreSchema] = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "genres": [{"name": "EN"}],
            }
        }
