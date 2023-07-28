import os
from fastapi import APIRouter, Depends
from typing import List
from authenticator import AccountAuthenticator
from queries.appointments import (
    LandlordAppointmentOut,
    AppointmentRepository,
)

authenticator = AccountAuthenticator(os.environ["SIGNING_KEY"])
router = APIRouter()


@router.get(
    "/appointment/history/landlord",
    response_model=List[LandlordAppointmentOut],
)
def get_appointment_history_for_landlord(
    repo: AppointmentRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    id = account_data["id"]
    return repo.get_all_appointments_for_landlord(id)
