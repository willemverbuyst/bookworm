import uuid

from database.python.genre.add_genre import add_genre_to_db, add_genres_to_db
from database.python.genre.delete_genre import delete_genre_from_db
from database.python.genre.get_genre_by_id import get_genre_by_id_from_db
from database.python.genre.get_genres import (
    get_genres_from_db,
    get_total_number_of_genres,
)
from database.python.genre.update_genre import update_genre_in_db
from error.main import raise_exception
from fastapi import APIRouter, Body, HTTPException, status
from models.genre import GenreSchema, GenresSchema

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
            "total": result,
            "message": "all genres have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")


@genre_router.post("/genres", tags=["genres"])
def add_genre(genres: GenresSchema = Body(...)) -> dict:
    try:
        add_genres_to_db(genres.genres)

        if len(genres.genres) == 1:
            message = "genre has been added"
        else:
            message = "genres have been added"

        return {
            "status": "success",
            "message": message,
        }
    except:
        raise_exception(500, "Something went wrong!")


@genre_router.delete("/genres", tags=["genres"])
def delete_genre(id: str) -> dict:
    try:
        delete_genre_from_db(id)

        return {
            "status": "success",
            "message": "genre has been deleted",
        }

    except:
        raise_exception(500, "Something went wrong!")


@genre_router.put("/genres/{genre_id}", tags=["genres"])
def update_genre(genre_id: str, genre: GenreSchema = Body(...)):
    try:
        id = uuid.UUID(str(genre_id))
    except:
        raise HTTPException(
            status.HTTP_422_UNPROCESSABLE_ENTITY, detail="id is not a valid uuid"
        )

    genre_in_db = get_genre_by_id_from_db(genre_id)

    if genre_in_db is None:
        raise HTTPException(
            status.HTTP_404_NOT_FOUND, detail="genre with this id not found"
        )

    updated_genre = update_genre_in_db(genre_id, genre.name)

    if updated_genre is None:
        raise HTTPException(
            status.HTTP_500_INTERNAL_SERVER_ERROR, detail="something went wrong"
        )

    return {
        "status": "success",
        "message": "genre has been updated",
        "data": updated_genre,
    }
