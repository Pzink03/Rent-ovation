from pydantic import BaseModel
from typing import List, Union
from queries.pool import pool
import traceback



class Error(BaseModel):
    message: str


class StatusIn(BaseModel):
    status_label: str


class StatusOut(BaseModel):
    id: str
    status_label: str


class StatusRepository:
    def create_status(self, status: StatusIn) -> Union[StatusOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO status
                            (status_label)
                        VALUES
                            (%s)
                        RETURNING id;
                        """,
                        [
                            status.status_label
                        ]
                    )
                    id = str(result.fetchone()[0])
                    return StatusOut(
                        id=id,
                        status_label=status.status_label
                    )
        except Exception:
            traceback.print_exc()
            return Error(message="Create status failed")


    def get_all_statuses(self) -> List[StatusOut]:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id
                        , status_label
                        FROM status
                        ORDER BY id;
                        """
                    )
                    return [
                        self.record_of_statuses(record)
                        for record in result
                ]


    def delete_a_property(self, status_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM status
                        WHERE id = %s
                        """,
                        [status_id]
                    )
                return True
        except Exception:
            traceback.print_exc()
            return False



    def record_of_statuses(self, record):
        return StatusOut(
            id=record[0],
            status_label=record[1],
        )
