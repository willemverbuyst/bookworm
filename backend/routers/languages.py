from database.python.language.add_language import add_language_to_db
from database.python.language.delete_language import delete_language_from_db
from database.python.language.get_languages import (
    get_languages_from_db, get_total_number_of_languages)
from error.main import raise_exception
from fastapi import APIRouter

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
            "message": "all languages have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")


@language_router.post("/languages", tags=["languages"])
def add_language(language: str) -> dict:
    try:
        new_id = get_total_number_of_languages() + 1

        add_language_to_db(new_id, language)


        return {
            "status": "success",
            "message": "language has been added",
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