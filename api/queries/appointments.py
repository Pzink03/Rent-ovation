from pydantic import BaseModel
from typing import Optional, List, Union
from datetime import date
from queries.pool import pool
import traceback


class Error(BaseModel):
    message: str


class AppointmentIn(BaseModel):
    issue: str
    status_id: int


class AppointmentOut(BaseModel):
    id: str
    issue: str
    created_on: date
    status_id: int
    property_id: str


class LandlordAppointmentOut(BaseModel):
    appointment_id: str
    issue: str
    created_on: date
    status_id: int
    property_id: str
    tenant_id: str
    name: str
    address: str
    city: str
    state: str
    zipcode: int
    picture_url: Optional[str]
    description: Optional[str]


class AppointmentUpdateIn(BaseModel):
    status_id: int


class AppointmentUpdateOut(BaseModel):
    id: str
    status_id: int


class AppointmentRepository:
    def create_appointment(self, appointment: AppointmentIn, tenant_id: int) -> AppointmentOut:
        created_on = date.today()
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT id
                        FROM property
                        WHERE tenant_id = %s
                        """,
                        [tenant_id]
                    )
                    property_id = db.fetchone()[0]
                    result = db.execute(
                        """
                        INSERT INTO appointment
                            (issue, created_on, status_id, property_id)
                        VALUES
                            (%s,%s,%s, %s)
                        RETURNING id;
                        """,
                        [
                            appointment.issue,
                            created_on,
                            int(appointment.status_id),
                            property_id,
                        ]
                    )
                    id = str(result.fetchone()[0])
                    return AppointmentOut(
                        id=id,
                        issue=appointment.issue,
                        created_on=created_on,
                        status_id=appointment.status_id,
                        property_id=str(property_id),
                    )
        except Exception:
            traceback.print_exc()
            return Error(message="Create property failed")


    def get_all_appointments(self) -> Union[Error, List[AppointmentOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                        , issue
                        , created_on
                        , property_id
                        , status_id
                        FROM appointment
                        ORDER BY id;
                        """
                    )
                    return [
                        self.record_to_appointment_out(record)
                        for record in result
                    ]
        except Exception:
            traceback.print_exc()
            return Error(message="Getting rents failed")


    def get_all_appointments_for_landlord(self, id) -> Union[Error, List[LandlordAppointmentOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT a.id AS landlord_id,
                            p.id AS property_id, p.tenant_id, p.name,
                            p.address, p.city, p.state, p.zipcode,
                            p.picture_url, p.description,
                            ap.id AS appointment_id, ap.issue, ap.created_on,
                            ap.status_id
                        FROM accounts a
                        LEFT OUTER JOIN property p ON(a.id = p.landlord_id)
                        LEFT OUTER JOIN appointment ap ON(p.id=ap.property_id)
                        WHERE a.id = %s
                        ORDER BY ap.status_id DESC, ap.created_on ASC
                        """,
                        [id]
                    )
                    return [
                        self.record_to_appointment_landlord_out(record)
                        for record in result
                    ]
        except Exception:
            traceback.print_exc()
            return Error(message="Get user properties failed")



    def update_appointment(self, appointment_id: int, appointment: AppointmentUpdateIn) -> Union[AppointmentUpdateOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                    """
                        UPDATE appointment
                        SET status_id = %s
                        WHERE id = %s
                    """,
                    [
                        appointment.status_id,
                        appointment_id,
                    ]
                )
                return AppointmentUpdateOut(
                    id=str(appointment_id),
                    status_id=appointment.status_id
                )
        except Exception:
            traceback.print_exc()
            return Error(message="Update user properties failed")


    def delete_appointment(self, appointment_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM appointment
                        WHERE id = %s
                        """,
                        [appointment_id]
                    )
                return True
        except Exception:
            traceback.print_exc()
            return False



    def record_to_appointment_out(self, record):
        return AppointmentOut(
            id=record[0],
            issue=record[1],
            created_on=record[2],
            property_id=record[3],
            status_id=record[4],
        )


    def record_to_appointment_landlord_out(self, record):
        return LandlordAppointmentOut(
            landlord_id=record[0],
            property_id=record[1],
            tenant_id=record[2],
            name=record[3],
            address=record[4],
            city=record[5],
            state=record[6],
            zipcode=record[7],
            picture_url=record[8],
            description=record[9],
            appointment_id=record[10],
            issue=record[11],
            created_on=record[12],
            status_id=record[13],
        )
