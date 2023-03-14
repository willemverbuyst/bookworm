from fastapi import APIRouter
from error.main import raise_exception
from database.python.language.get_languages import get_languages_from_db

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
