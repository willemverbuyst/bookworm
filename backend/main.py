from fastapi import FastAPI
from routers.root import root_router

app = FastAPI()

app.include_router(root_router)
