from fastapi import APIRouter, Depends
from typing import List
from queries.rent import (
    RentIn,
    RentOut,
    RentRepository,
)


router = APIRouter()


@router.post("/rent/", response_model = RentOut)
def create_rent(
    rent: RentIn,
    property_id: int,
    repo: RentRepository = Depends(),
):
    rent_obj = repo.create_rent(rent, property_id)
    return rent_obj
