from fastapi import APIRouter, Depends, Response, HTTPException
from typing import Union, Optional, List
from queries.billings import (
    Error,
    BillingsOut,
    BillingsWithBillingsOut,
    BillingsRepository,
)
from authenticator import authenticator

router = APIRouter()


@router.post("/list", response_model=Union[BillingsOut, Error])
def create_billings_list(
    response: Response,
    repo: BillingsRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    response.status = 400
    return repo.create()


@router.get(
    "/list/{billings_id}/items",
    response_model=Union[Optional[List[BillingsWithBillingsOut]], Error],
)
def get_one_billings_w_items(
    billings_id: int,
    response: Response,
    repo: BillingsRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    billings = repo.get_one_with_billings_items(billings_id)
    if billings is None:
        raise HTTPException(status_code=404, detail="billings not found")
    return billings
