import uuid

from database.python.language.add_language import (
    add_language_to_db,
    add_languages_to_db,
)
from database.python.language.delete_language import delete_language_from_db
from database.python.language.get_language_by_id import get_language_by_id_from_db
from database.python.language.get_languages import (
    get_languages_from_db,
    get_total_number_of_languages,
)
from database.python.language.update_language import update_language_in_db
from error.main import raise_exception
from fastapi import APIRouter, Body, HTTPException, status
from models.language import LanguageSchema, LanguagesSchema

language_router = APIRouter()


@language_router.get("/languages", tags=["languages"])
def get_all_languages() -> dict:
    try:
        languages = get_languages_from_db()
        result = len(languages)

        return {
            "status": "success",
            "result": result,
            "data": languages,
            "total": result,
            "message": "all languages have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")


@language_router.post("/languages", tags=["languages"])
def add_language(languages: LanguagesSchema = Body(...)) -> dict:
    try:
        add_languages_to_db(languages.languages)

        if len(languages.languages) == 1:
            message = "language has been added"
        else:
            message = "languages have been added"

        return {
            "status": "success",
            "message": message,
        }
    except:
        raise_exception(500, "Something went wrong!")


@language_router.delete("/languages", tags=["languages"])
def delete_language(id: str) -> dict:
    try:
        delete_language_from_db(id)

        return {
            "status": "success",
            "message": "language has been deleted",
        }

    except:
        raise_exception(500, "Something went wrong!")


@language_router.put("/languages/{language_id}", tags=["languages"])
def update_language(language_id: str, language: LanguageSchema = Body(...)):
    try:
        id = uuid.UUID(str(language_id))
    except:
        raise HTTPException(
            status.HTTP_422_UNPROCESSABLE_ENTITY, detail="id is not a valid uuid"
        )

    language_in_db = get_language_by_id_from_db(language_id)

    if language_in_db is None:
        raise HTTPException(
            status.HTTP_404_NOT_FOUND, detail="language with this id not found"
        )

    updated_language = update_language_in_db(language_id, language.name_of_language)

    if updated_language is None:
        raise HTTPException(
            status.HTTP_500_INTERNAL_SERVER_ERROR, detail="something went wrong"
        )

    return {
        "status": "success",
        "message": "language has been updated",
        "data": updated_language,
    }
