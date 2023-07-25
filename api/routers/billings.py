import os
from fastapi import APIRouter, Depends
from typing import Union, List
from queries.billings import (
    Error,
    BillingsIn,
    BillingsOut,
    BillingsUpdate,
    BillingsRepository,
)
from authenticator import AccountAuthenticator
router = APIRouter()


@router.post("/billings", response_model= Union[BillingsOut, Error])
def create_billings(
    billings: BillingsIn,
    repo: BillingsRepository = Depends(),
    
):
    return repo.create_billings(billings)
    


@router.get(
    "/billings/", response_model=Union[Error, List[BillingsOut]])
def get_all_billings(
    repo: BillingsRepository = Depends(),
):
     return repo.get_all_billings()

@router.put("/billings/{billings_id}", response_model = BillingsUpdate)
def update_billings(
    billings_id: int,
    billings: BillingsIn,
    repo: BillingsRepository = Depends(),
) -> BillingsUpdate:
    return repo.update_billings(billings_id, billings)

@router.delete("/billings/{billings_id}", response_model=bool)
def delete_billings(
    billings_id: int,
    repo: BillingsRepository = Depends(),
) -> bool:
    return repo.delete_a_billings(billings_id)

