from database.python.genre.get_genres import get_genres_from_db
from error.main import raise_exception
from fastapi import APIRouter

genre_router = APIRouter()


@genre_router.get("/genres", tags=["genres"])
def get_all_genres() -> dict:
    try:
        genres = get_genres_from_db()
        result = len(genres)

        return {
            "status": "success",
            "result": result,
            "data": genres,
            "message": "all genres have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")
