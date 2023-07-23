from pydantic import BaseModel
from typing import Union, List
from queries.pool import pool


class Error(BaseModel):
    message: str


class BillingsOut(BaseModel):
    billings_id: int


class BillingsWithBillingsOut(BaseModel):
    id: int
    name: str
    card_number: int
    expirydate: int
    cvv: int


class BillingsRepository:
    def get_one_with_billings_items(
        self, billings_id: int
    ) -> Union[List[BillingsWithBillingsOut], Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                            SELECT ci.id
                                , mi.name
                                , ci.card_number
                                , ci.expirydate
                                , ci.cvv;
                        """,
                        [billings_id],
                    )
                    results = db.fetchall()
                    if results is None:
                        return None
                    result = []
                    for record in results:
                        List = BillingsWithBillingsOut(
                            id=record[0],
                            name=record[1],
                            card_number=record[2],
                            expirydate=record[3],
                            cvv=record[4],
                        )
                        result.append(List)
                    return result
        except Exception as e:
            print(e)
            return {"message": "Invalid billings ID"}

    def create(self) -> Union[BillingsOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO billings DEFAULT VALUES
                        RETURNING billings_id
                        """
                    )
                    row = result.fetchone()
                    billings_id = row[0]
                    return BillingsOut(billings_id_id=billings_id)
        except Exception as e:
            print(e)
            return {"message": "Create did not work"}
