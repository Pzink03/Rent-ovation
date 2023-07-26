from pydantic import BaseModel
from queries.pool import pool
from typing import Optional, List, Union
import traceback


class DuplicateAccountError(ValueError):
    pass


class Error(BaseModel):
    message: str


class AccountIn(BaseModel):
    email: str
    password: str
    is_landlord: bool


class AccountOut(BaseModel):
    id: str
    email: str
    is_landlord: bool


class AccountOutWithPassword(AccountOut):
    hashed_password: str


class AccountInTest(AccountIn):
    username: str


class AccountRepository(BaseModel):
    def create(
        self, info: AccountIn, hashed_password: str
    ) -> AccountOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                    INSERT INTO accounts
                        (email, password, is_landlord)
                    VALUES
                        (%s, %s, %s)
                    RETURNING id;
                    """,
                    [
                        info.email,
                        hashed_password,
                        info.is_landlord,
                    ],
                )
                id = result.fetchone()[0]
                return AccountOutWithPassword(
                    id=id,
                    email=info.email,
                    hashed_password=hashed_password,
                    is_landlord=info.is_landlord,
                )

    def get_all_accounts(self) -> List[AccountOut]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                         SELECT id
                            , email
                            , password
                            , is_landlord
                            FROM accounts
                            ORDER BY id;
                            """,
                    )
                    return [
                        self.record_to_account_out(record) for record in result
                    ]
        except Exception:
            traceback.print_exc()
            return Error(message="Invalid")

    def get(self, email: str) -> AccountOutWithPassword:
        with pool.connection() as conn:
            with conn.cursor() as db:
                result = db.execute(
                    """
                        SELECT id
                        , email
                        , password
                        , is_landlord
                        FROM accounts
                        WHERE email = %s
                        """,
                    [email],
                )
                record = result.fetchone()
                if record is None:
                    return None
                return self.record_to_account_out(record)

    def record_to_account_out(self, record):
        return AccountOutWithPassword(
            id=record[0],
            email=record[1],
            hashed_password=record[2],
            is_landlord=record[3],
        )

    def account_in_to_out(self, id: int, info: AccountIn):
        old_data = info.dict()
        return AccountOutWithPassword(id=id, **old_data)
