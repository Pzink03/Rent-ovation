from pydantic import BaseModel
from typing import Union, List
from datetime import date
from queries.pool import pool
import traceback


class Error(BaseModel):
    message: str


class BillingsIn(BaseModel):
    name: str
    card_number: int
    expirydate: date
    cvv: int


class BillingsOut(BaseModel):
    id: int
    name: str
    card_number: int
    expirydate: date
    cvv: int

class BillingsUpdate(BaseModel):
    id: int
    name: str
    card_number: int
    expirydate: date
    cvv: int

class BillingsRepository:
    def create_billings(self, billings: BillingsIn) -> Union[BillingsOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO billings
                            ( name, card_number, expirydate, cvv)
                        VALUES
                            (%s,%s,%s,%s)
                        RETURNING id;
                        """,

                        [
                            billings.name,
                            billings.card_number,                        
                            billings.expirydate,
                            billings.cvv,
                         ],
                    )
        
                    id = result.fetchone()[0]
                    return BillingsOut(
                        id=id,
                        name=billings.name,
                        card_number=billings.card_number,
                        expirydate=billings.expirydate,
                        cvv=billings.cvv,
                    )
        except Exception:
            traceback.print_exc()
            return Error(message="Create billings failed")


    def get_all_billings(self) -> Union[Error, List[BillingsOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        SELECT id
                        , name
                        , card_number
                        , expirydate
                        , cvv
                        FROM billings
                        ORDER BY id;
                        """
                    )
                    return [
                        BillingsOut(
                            id=record[0],
                            name=record[1],
                            card_number=record[2],
                            expirydate=record[3],
                            cvv=record[4],
                        )
                        for record in db.fetchall() 
                    ]
        except Exception:
            traceback.print_exc()
            return Error(message="Getting billings failed")
        
    def update_billings(self, billings_id: int, billings: BillingsIn) -> Union[BillingsOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                    """
                        UPDATE billings
                        SET name = %s
                        , card_number = %s
                        , expirydate = %s
                        , cvv = %s
                        WHERE id = %s
                    """,
                    [
                        billings.name,
                        billings.card_number,
                        billings.expirydate,
                        billings.cvv,
                        billings_id,
                    ]
                )
                return BillingsUpdate(
                    id=billings_id,
                    name=billings.name,
                    card_number=billings.card_number,
                    expirydate=billings.expirydate,
                    cvv=billings.cvv
                )
        except Exception:
            traceback.print_exc()
            return Error(message="Update user billings failed")

    def delete_a_billings(self, billings_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM billings
                        WHERE id = %s
                        """,
                        [billings_id]
                    )
                return True
        except Exception:
            traceback.print_exc()
            return False




