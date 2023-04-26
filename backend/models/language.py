from pydantic import BaseModel, Field


class LanguageSchema(BaseModel):
    language: str = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "language": "EN",
            }
        }
