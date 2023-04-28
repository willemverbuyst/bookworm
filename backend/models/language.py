from pydantic import BaseModel, Field


class LanguageSchema(BaseModel):
    name: str


class LanguagesSchema(BaseModel):
    languages: list[LanguageSchema] = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "languages": [{"name": "EN"}],
            }
        }
