import os
from fastapi import APIRouter, Depends
from typing import List, Union
from authenticator import AccountAuthenticator
from queries.property import (
    PropertyIn,
    PropertyOut,
    PropertyRepository,
    PropertyUpdate,
    Error,
)


authenticator = AccountAuthenticator(os.environ["SIGNING_KEY"])
router = APIRouter()


@router.post("/create/property/", response_model=Union[PropertyOut, Error])
def create_property(
    property: PropertyIn,
    repo: PropertyRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    landlord_id = account_data["id"]
    property_obj = repo.create(property, int(landlord_id))
    return property_obj


@router.put("/property/{property_id}", response_model=PropertyUpdate)
def update_property(
    property_id: int,
    property: PropertyIn,
    repo: PropertyRepository = Depends(),
) -> PropertyUpdate:
    return repo.update_a_property(property_id, property)


@router.delete("/property/{property_id}", response_model=bool)
def delete_property(
    property_id: int,
    repo: PropertyRepository = Depends(),
) -> bool:
    return repo.delete_a_property(property_id)


@router.get("/property/", response_model=List[PropertyOut])
def get_all_properties(
    repo: PropertyRepository = Depends(),
):
    return repo.get_all_properties()


@router.get("/property/landlord", response_model=Union[List[PropertyOut],Error])
def get_all_properties_from_landlord(
    repo: PropertyRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    id = account_data["id"]
    return repo.get_all_properties_from_landlord(id)


@router.get("/property/tenant", response_model=Union[List[PropertyOut], Error])
def get_property_for_tenant(
    repo: PropertyRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    id = account_data["id"]
    return repo.get_property_for_tenant(id)
