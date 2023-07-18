import os
from fastapi import APIRouter, Depends, Response
from pydantic import BaseModel
from typing import List, Optional, Union
from authenticator import AccountAuthenticator
from queries.property import (
    Error,
    PropertyIn,
    PropertyOut,
    PropertyList,
    PropertyRepository
)

authenticator = AccountAuthenticator(os.environ["SIGNING_KEY"])
router = APIRouter()


@router.post("/property/", response_model = PropertyOut)
def create_property(
    property: PropertyIn,
    repo: PropertyRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),

):
    print(account_data)
    landlord_id = account_data['id']
    print(landlord_id)
    print(property.dict())
    property_obj = repo.create(property, int(landlord_id))
    print(property_obj)
    return property_obj

@router.get("/property/", response_model = List[PropertyOut])
def get_all_properties(
    repo: PropertyRepository = Depends(),
):
    return repo.get_all_properties()


@router.get("/property/user", response_model = List[PropertyOut])
def get_all_properties_from_user(
    repo: PropertyRepository = Depends(),
    acccount_data: dict = Depends(authenticator.get_current_account_data),
):
    id = acccount_data['id']
    return repo.get_all_properties_from_user(id)
