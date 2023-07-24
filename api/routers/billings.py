import os
from fastapi import APIRouter, Depends, Response, HTTPException
from typing import List, Dict
from queries.billings import (
    BillingsIn,
    BillingsOut,
    BillingsRepository,
)
from authenticator import AccountAuthenticator

router = APIRouter()


@router.post("/billings", response_model= BillingsOut)
def create_billings(
    billings: BillingsIn,
    repo: BillingsRepository = Depends(),
):
    return repo.create_billings(billings)


@router.get(
    "/billings/",
    response_model= Dict[str, List[BillingsOut]])
def get_all_billings(
    repo: BillingsRepository = Depends(),
):
     billings = repo.get_all_billings()
     return {"billings": billings}

