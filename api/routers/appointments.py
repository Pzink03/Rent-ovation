import os
from fastapi import APIRouter, Depends
from typing import List
from authenticator import AccountAuthenticator
from queries.appointments import (
    AppointmentIn,
    AppointmentOut,
    AppointmentUpdateIn,
    AppointmentUpdateOut,
    AppointmentRepository,
    LandlordAppointmentOut,
)


authenticator = AccountAuthenticator(os.environ["SIGNING_KEY"])
router = APIRouter()


@router.post("/create/appointment/", response_model=AppointmentOut)
def create_appointment(
    appointment: AppointmentIn,
    repo: AppointmentRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    tenant_id = account_data["id"]
    return repo.create_appointment(appointment, int(tenant_id))


@router.put(
    "/appointment/{appointment_id}", response_model=AppointmentUpdateOut
)
def update_appointment(
    appointment_id: int,
    appointment: AppointmentUpdateIn,
    repo: AppointmentRepository = Depends(),
) -> AppointmentUpdateOut:
    return repo.update_appointment(appointment_id, appointment)


@router.delete("/appointment/{appointment_id}", response_model=bool)
def delete_appointment(
    appointment_id: int,
    repo: AppointmentRepository = Depends(),
) -> bool:
    return repo.delete_appointment(appointment_id)


@router.get("/appointment/", response_model=List[AppointmentOut])
def get_all_appointments(
    repo: AppointmentRepository = Depends(),
):
    return repo.get_all_appointments()


@router.get(
    "/appointment/landlord", response_model=List[LandlordAppointmentOut]
)
def get_all_appointments_for_landlord(
    repo: AppointmentRepository = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    id = account_data["id"]
    return repo.get_all_appointments_for_landlord(id)
