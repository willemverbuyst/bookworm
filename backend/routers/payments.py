from database.python.payment.get_payments import (
    get_payments_from_db,
    get_total_number_of_payments,
)
from error.main import raise_exception
from fastapi import APIRouter, Body, HTTPException, status

payment_router = APIRouter()


@payment_router.get("/payments", tags=["payments"])
def get_all_payments(amount=5) -> dict:
    try:
        payments = get_payments_from_db(amount)
        result = len(payments)

        return {
            "status": "success",
            "result": result,
            "data": payments,
            "total": result,
            "message": "all payments have been fetched",
        }
    except:
        raise_exception(500, "Something went wrong!")
