from fastapi import APIRouter, Depends
from typing import List
from queries.status import StatusIn, StatusOut, StatusRepository

router = APIRouter()


@router.post("/create/status/", response_model=StatusOut)
def create_status(
    status: StatusIn,
    repo: StatusRepository = Depends(),
):
    return repo.create_status(status)


@router.get("/status/", response_model=List[StatusOut])
def get_all_statuses(repo: StatusRepository = Depends()):
    return repo.get_all_statuses()


@router.delete("/status/{status_id}", response_model=bool)
def delete_status(
    status_id: int,
    repo: StatusRepository = Depends(),
) -> bool:
    return repo.delete_a_property(status_id)
