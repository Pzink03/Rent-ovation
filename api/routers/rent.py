import os
from fastapi import APIRouter, Depends
from typing import List
from authenticator import AccountAuthenticator
from queries.rent import (
    RentIn,
    RentOut,
    RentUpdate,
    RentOutAll,
    LandlordRentOut,
    TenantRentOut,
    RentRepository,
)


authenticator = AccountAuthenticator(os.environ["SIGNING_KEY"])
router = APIRouter()


@router.post("/create/rent/", response_model=RentOut)
def create_rent(
    rent: RentIn,
    property_id: int,
    repo: RentRepository = Depends(),
):
    rent_obj = repo.create_rent(rent, property_id)
    return rent_obj


@router.put("/rent/{rent_id}", response_model=RentUpdate)
def update_rent(
    rent_id: int,
    rent: RentIn,
    repo: RentRepository = Depends(),
) -> RentUpdate:
    return repo.update_rent(rent_id, rent)


@router.delete("/rent/{rent_id}", response_model=bool)
def delete_rent(
    rent_id: int,
    repo: RentRepository = Depends(),
) -> bool:
    return repo.delete_rent(rent_id)


@router.get("/rent/", response_model=List[RentOutAll])
def get_all_rents(
    repo: RentRepository = Depends(),
):
    return repo.get_all_rents()


@router.get("/rent/landlord", response_model=List[LandlordRentOut])
def get_all_rents_from_landlord(
    repo: RentRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    id = account_data["id"]
    return repo.get_all_rents_from_landlord(id)


@router.get("/rent/tenant", response_model=List[TenantRentOut])
def get_rent_from_tenant(
    repo: RentRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    id = account_data["id"]
    return repo.get_rent_from_tenant(id)


@router.post("/daily/")
def daily_update_rent(
    repo: RentRepository = Depends(),
):
    return repo.daily_update_rent()
