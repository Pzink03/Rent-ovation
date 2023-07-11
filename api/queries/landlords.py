from pydantic import BaseModel
from queries.pool import pool
from typing import List, Union


class ErrorMessage(BaseModel):
    message: str


class LandlordOut(BaseModel):
    id: int
    name: str
    email: str
    password: str
    password_confirmation: str


class LandlordIn(BaseModel):
    name: str
    email: str
    password: str
    password_confirmation: str


class LandlordRepository:
    def update(
        self, landlord_id: int, landlord: LandlordIn
    ) -> Union[LandlordOut, ErrorMessage]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        UPDATE landlords
                        SET name = %s
                        , email = %s
                        , password = %s
                        , password_confirmation = %s
                        WHERE id = %s
                        """,
                        [
                            landlord.name,
                            landlord.email,
                            landlord.password,
                            landlord.password_confirmation,
                            landlord_id,
                        ],
                    )
                    old_data = landlord.dict()
                    return LandlordOut(id=landlord_id, **old_data)
        except Exception as e:
            print(e)
            return {"message": "Could not update landlord"}

    def delete(self, landlord_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM landlords
                        WHERE id = %s
                        """,
                        [landlord_id],
                    )
                    return True
        except Exception as e:
            print(e)
            return False

    def get_one(self, landlord_id: int) -> LandlordOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    SELECT id
                        , name
                        , email
                        , password
                        , password_confirmation
                    FROM landlords
                    WHERE id = %s
                    """,
                    [landlord_id],
                )
                record = result.fetchone()
                return self.record_to_landlord_out(record)

    def get_all(self) -> Union[ErrorMessage, List[LandlordOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        SELECT id, name, email, password, password_confirmation
                        FROM landlords
                        ORDER BY name
                        """
                    )
                    return [
                        LandlordOut(
                            id=record[0],
                            name=record[1],
                            email=record[2],
                            password=record[3],
                            password_confirmation=record[4],
                        )
                        for record in result
                    ]
        except Exception as e:
            print(e)
            return {"message": "Could not get all landlords"}

    def create(self, landlord: LandlordIn) -> LandlordOut:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO landlords
                        (name, email, password, password_confirmation)
                    VALUES
                        (%s, %s, %s, %s)
                    RETURNING id;
                    """,
                    [
                        landlord.name,
                        landlord.email,
                        landlord.password,
                        landlord.password_confirmation,
                    ],
                )
                id = result.fetchone()[0]
                old_data = landlord.dict()
                return LandlordOut(id=id, **old_data)

    def record_to_landlord_out(self, record):
        return LandlordOut(
            id=record[0],
            name=record[1],
            email=record[2],
            password=record[3],
            password_confirmation=record[4],
        )
