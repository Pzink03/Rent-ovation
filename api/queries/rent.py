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
    property_id: str


class RentOut(BaseModel):
    id: str
    amount_due: int
    due_date: date
    property_id: str
    status_id: str


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
