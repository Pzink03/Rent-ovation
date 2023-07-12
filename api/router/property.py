from fastapi import APIRouter, Depends, Response
from typing import List, Optional, Union
from queries.property import (
    Error,
    PropertyIn,
    PropertyOut,
    PropertyList,
    PropertyRepository
)


router = APIRouter()


@router.post("/property", response_model = Union[PropertyOut, Error])
def create_property(
    property: PropertyIn,
    response: Response,
    repo: PropertyRepository = Depends (),
):
    response.status_code = 400
    return repo.create(property)


@router.get("/property", response_model = List[PropertyOut])
def get_all(
    repo: PropertyRepository = Depends (),
):
    return repo.get_all()
