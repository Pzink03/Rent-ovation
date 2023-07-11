from fastapi import APIRouter, Depends
from queries.landlords import (
    LandlordIn,
    LandlordRepository,
    LandlordOut,
    ErrorMessage,
)
from typing import Union, List

router = APIRouter()


@router.put(
    "/landlords/{landlord_id}", response_model=Union[LandlordOut, ErrorMessage]
)
def update_landlord(
    landlord_id: int,
    landlord: LandlordIn,
    repo: LandlordRepository = Depends(),
) -> Union[LandlordOut, ErrorMessage]:
    return repo.update(landlord_id, landlord)


@router.delete("/landlords/{landlord_id}", response_model=bool)
def delete_landlord(
    landlord_id: int,
    repo: LandlordRepository = Depends(),
) -> bool:
    return repo.delete(landlord_id)


@router.get("/landlords/{landlord_id}", response_model=LandlordOut)
def get_one_landlord(
    landlord_id: int,
    repo: LandlordRepository = Depends(),
) -> LandlordOut:
    return repo.get_one(landlord_id)


@router.post("/landlords")
def create_landlord(
    landlord: LandlordIn, repo: LandlordRepository = Depends()
):
    return repo.create(landlord)


@router.get(
    "/landlords", response_model=Union[ErrorMessage, List[LandlordOut]]
)
def get_all(repo: LandlordRepository = Depends()):
    return repo.get_all()
