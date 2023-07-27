from pydantic import BaseModel
from typing import Optional, List, Union
from datetime import date
from queries.pool import pool
import traceback



class Error(BaseModel):
    message: str


class RentIn(BaseModel):
    amount_due: int
    due_date: date


class RentOut(BaseModel):
    id: str
    amount_due: int
    due_date: date
    property_id: str


class RentOutAll(BaseModel):
    rent_id: str
    amount_due: int
    due_date: date
    property_id: str
    property_name: str
    landlord_id: str
    tenant_id: str
    address: str
    city: str
    state: str
    zipcode: str
    picture_url: str
    description: str
    landlord_email: str
    tenant_email: str
    status_id: str
    status_label: str



class LandlordRentOut(BaseModel):
    property_id: str
    tenant_id: Optional[str]
    property_name: str
    address: str
    city: str
    state: str
    zipcode: int
    picture_url: Optional[str]
    description: Optional[str]
    rent_id: str
    amount_due: int
    due_date: date
    status_id: str
    status_label: str
    tenant_email: str


class TenantRentOut(BaseModel):
    property_id: str
    landlord_id: str
    property_name: str
    address: str
    city: str
    state: str
    zipcode: int
    picture_url: Optional[str]
    description: Optional[str]
    rent_id: str
    amount_due: int
    due_date: date
    status_id: str
    status_label: str
    landlord_email: str

class RentUpdate(BaseModel):
    id: str
    amount_due: int
    due_date: date


class RentRepository:
    def create_rent(self, rent: RentIn, property_id: int) -> RentOut:
        today = date.today()
        status_id = 1 if rent.due_date >= today else 2
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO rent
                            (amount_due, due_date, property_id, status_id)
                        VALUES
                            (%s,%s,%s, %s)
                        RETURNING id;
                        """,
                        [
                            rent.amount_due,
                            rent.due_date,
                            property_id,
                            status_id,
                        ]
                    )
                    id = str(result.fetchone()[0])
                    return RentOut(
                        id=id,
                        amount_due=rent.amount_due,
                        due_date=rent.due_date,
                        property_id=str(property_id),
                        status_id=str(status_id)
                    )
        except Exception:
            traceback.print_exc()
            return Error(message="Create property failed")


    def get_all_rents(self) -> Union[Error, List[RentOutAll]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT r.id AS rent_id, r.amount_due, r.due_date
                        , r.property_id, r.status_id,
                        p.name AS property_name, p.tenant_id, p.landlord_id,
                        p.address, p.city, p.state,
                        p.zipcode, p.picture_url, p.description,
                        a1.email AS landlord_email,
                        a2.email AS tenant_email,
                        s.status_label
                        FROM rent r
                        LEFT OUTER JOIN property p ON (p.id = r.property_id)
                        LEFT OUTER JOIN accounts a1 ON (a1.id = p.landlord_id)
                        LEFT OUTER JOIN accounts a2 ON (a2.id = p.tenant_id)
                        LEFT OUTER JOIN status s ON (s.id = r.status_id)
                        ORDER BY r.id;
                        """
                    )
                    return [
                        self.record_to_rent_out(record)
                        for record in result
                    ]
        except Exception:
            traceback.print_exc()
            return Error(message="Getting rents failed")


    def get_all_rents_from_landlord(self, id) -> Union[Error, List[LandlordRentOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT a1.id AS landlord_id,
                            p.id AS property_id, p.tenant_id, p.name AS property_name,
                            p.address, p.city, p.state, p.zipcode,
                            p.picture_url, p.description,
                            r.id AS rent_id, r.amount_due, r.due_date,
                            r.status_id,
                            s.status_label,
                            a2.email AS tenant_email
                        FROM accounts a1
                        LEFT OUTER JOIN property p ON (a1.id = p.landlord_id)
                        LEFT OUTER JOIN rent r ON (p.id=r.property_id)
                        LEFT OUTER JOIN status s ON (s.id=r.status_id)
                        LEFT OUTER JOIN accounts a2 ON (p.tenant_id=a2.id)
                        WHERE a1.id = %s
                        """,
                        [id]
                    )
                    return [
                        self.record_to_rent_landlord_out(record)
                        for record in result
                    ]
        except Exception:
            traceback.print_exc()
            return Error(message="Get user properties failed")


    def get_rent_from_tenant(self, id) -> Union[Error, List[TenantRentOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT a1.id AS tenant_id,
                            p.id AS property_id, p.landlord_id, p.name AS property_name,
                            p.address, p.city, p.state, p.zipcode,
                            p.picture_url, p.description,
                            r.id AS rent_id, r.amount_due, r.due_date,
                            r.status_id,
                            s.status_label,
                            a2.email AS landlord_email
                        FROM accounts a1
                        LEFT OUTER JOIN property p ON (a1.id = p.tenant_id)
                        LEFT OUTER JOIN rent r ON (p.id=r.property_id)
                        LEFT OUTER JOIN status s ON (s.id=r.status_id)
                        LEFT OUTER JOIN accounts a2 ON (a2.id=p.landlord_id)
                        WHERE a1.id = %s
                        """,
                        [id]
                    )
                    return [
                        self.record_to_rent_tenant_out(record)
                        for record in result
                    ]
        except Exception:
            traceback.print_exc()
            return Error(message="Get user properties failed")


    def update_rent(self, rent_id: int, rent: RentIn) -> Union[RentOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                    """
                        UPDATE rent
                        SET amount_due = %s
                        , due_date = %s
                        WHERE id = %s
                    """,
                    [
                        rent.amount_due,
                        rent.due_date,
                        rent_id,
                    ]
                )
                return RentUpdate(
                    id=str(rent_id),
                    amount_due=rent.amount_due,
                    due_date=rent.due_date
                )
        except Exception:
            traceback.print_exc()
            return Error(message="Update user properties failed")


    def delete_rent(self, rent_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM rent
                        WHERE id = %s
                        """,
                        [rent_id]
                    )
                return True
        except Exception:
            traceback.print_exc()
            return False


    def daily_update_rent(self):
        try:
            today = date.today()
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE rent
                        SET status_id = CASE
                            WHEN due_date < %s THEN 2
                            ELSE 1
                        END
                        WHERE status_id != 3
                        """,
                        [today]
                    )
                    return True
        except Exception:
            traceback.print_exc()
            return False


    def record_to_rent_out(self, record):
        return RentOutAll(
            rent_id=record[0],
            amount_due=record[1],
            due_date=record[2],
            property_id=record[3],
            property_name=record[5],
            landlord_id=record[7],
            address=record[8],
            city=record[9],
            state=record[10],
            zipcode=record[11],
            picture_url=record[12],
            description=record[13],
            tenant_id=record[6],
            landlord_email=record[14],
            tenant_email=record[15],
            status_id=record[4],
            status_label=record[16]
        )


    def record_to_rent_landlord_out(self, record):
        return LandlordRentOut(
            landlord_id=record[0],
            property_id=record[1],
            tenant_id=record[2],
            property_name=record[3],
            address=record[4],
            city=record[5],
            state=record[6],
            zipcode=record[7],
            picture_url=record[8],
            description=record[9],
            rent_id=record[10],
            amount_due=record[11],
            due_date=record[12],
            status_id=record[13],
            status_label=record[14],
            tenant_email=record[15]
        )


    def record_to_rent_tenant_out(self, record):
        return TenantRentOut(
            tenant_id=record[0],
            property_id=record[1],
            landlord_id=record[2],
            property_name=record[3],
            address=record[4],
            city=record[5],
            state=record[6],
            zipcode=record[7],
            picture_url=record[8],
            description=record[9],
            rent_id=record[10],
            amount_due=record[11],
            due_date=record[12],
            status_id=record[13],
            status_label=record[14],
            landlord_email=record[15]
        )
