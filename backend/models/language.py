from pydantic import BaseModel, Field


class LanguageSchema(BaseModel):
    name_of_language: str


class LanguagesSchema(BaseModel):
    languages: list[LanguageSchema] = Field(...)

    class Config:
        schema_extra = {
            "example": {
                "languages": [{"name_of_language": "EN"}],
            }
        }
