from fastapi import HTTPException


def raise_exception(status_code: int, message: str) -> dict:
    raise HTTPException(status_code=status_code, detail=message)
