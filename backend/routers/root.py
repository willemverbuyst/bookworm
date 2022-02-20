from fastapi import APIRouter

root_router = APIRouter()


@root_router.get("/", tags=["root"])
async def test_root():
    return {"ping": "pong"}
