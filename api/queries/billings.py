from pydantic import BaseModel
from typing import Union, List
from queries.pool import pool
import traceback


class Error(BaseModel):
    message: str


class BillingsIn(BaseModel):
    id: int
    name: str
    card_number: int
    expirydate: int
    cvv: int


class BillingsOut(BaseModel):
    id: int
    name: str
    card_number: int
    expirydate: int
    cvv: int


class BillingsRepository:
    def create_billings(
        self, billings: BillingsIn
    ) -> Union[BillingsOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        INSERT INTO billing
                            (id, name, card_number, expirydate, cvv)
                        VALUES
                            (%s,%s,%s,%s,%s)
                        RETURNING id;
                        """,

                        [
                            billings.id,
                            billings.name,
                            billings.card_number,
                            billings.expirydate,
                            billings.cvv,

                         ],
                    )
                    result = db.fetchone()
                    id = str(result[0])
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


    def get_all_billings(self) -> List[BillingsOut]:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
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
                    result = db.fetchall()  
            return [self.record_to_billings_out(record) for record in result]
