from pydantic import BaseModel
from typing import Optional, List, Union
from queries.pool import pool
import traceback

class Error(BaseModel):
    message: str


class PropertyIn(BaseModel):
    tenant_id: Optional[int]
    name: str
    address: str
    city: str
    state: str
    zipcode: int
    picture_url: Optional[str]
    description: Optional[str]


class PropertyOut(BaseModel):
    id: str
    landlord_id: str
    tenant_id: Optional[str]
    name: str
    address: str
    city: str
    state: str
    zipcode: int
    picture_url: Optional[str]
    description: Optional[str]


class PropertyUpdate(BaseModel):
    id: str
    tenant_id: Optional[str]
    name: str
    address: str
    city: str
    state: str
    zipcode: int
    picture_url: Optional[str]
    description: Optional[str]


class PropertyRepository:
    def create(self, property: PropertyIn, landlord_id: int) -> Union[PropertyOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO property
                            (landlord_id, tenant_id, name, address, city, state, zipcode, picture_url, description)
                        VALUES
                            (%s,%s,%s,%s,%s,%s,%s,%s,%s)
                        RETURNING id;
                        """,
                        [
                            landlord_id,
                            property.tenant_id,
                            property.name,
                            property.address,
                            property.city,
                            property.state,
                            property.zipcode,
                            property.picture_url,
                            property.description,
                        ]
                    )
                    id = str(result.fetchone()[0])
                    return PropertyOut(
                        id=id,
                        landlord_id=str(landlord_id),
                        tenant_id=str(property.tenant_id),
                        name=property.name,
                        address=property.address,
                        city=property.city,
                        state=property.state,
                        zipcode=property.zipcode,
                        picture_url=property.picture_url,
                        description=property.description
                    )
        except Exception:
            traceback.print_exc()
            return Error(message="Create property failed")


    def get_all_properties(self) -> Union[Error, List[PropertyOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                         SELECT id
                            , landlord_id
                            , tenant_id
                            , name
                            , address
                            , city
                            , state
                            , zipcode
                            , picture_url
                            , description
                            FROM property
                            ORDER BY id;
                            """
                    )
                    return [
                        self.record_to_property_out(record)
                        for record in result
                    ]
        except Exception:
            traceback.print_exc()
            return Error(message="Get all properties failed")


    def get_all_properties_from_user(self, id) -> Union[Error, List[PropertyOut]]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                         SELECT id
                            , landlord_id
                            , tenant_id
                            , name
                            , address
                            , city
                            , state
                            , zipcode
                            , picture_url
                            , description
                            FROM property
                            WHERE landlord_id = %s
                            ORDER BY id;
                            """,
                                [id],
                    )
                    return [
                        self.record_to_property_out(record)
                        for record in result
                    ]
        except Exception:
            traceback.print_exc()
            return Error(message="Get user properties failed")


    def record_to_property_out(self, record):
        return PropertyOut(
            id=record[0],
            landlord_id=record[1],
            tenant_id=record[2],
            name=record[3],
            address=record[4],
            city=record[5],
            state=record[6],
            zipcode=record[7],
            picture_url=record[8],
            description=record[9],
        )


    def update_a_property(self, property_id: int, property: PropertyIn) -> Union[PropertyOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                    """
                        UPDATE property
                        SET tenant_id = %s
                        , name = %s
                        , address = %s
                        , city = %s
                        , state = %s
                        , zipcode = %s
                        , picture_url = %s
                        , description = %s
                        WHERE id = %s
                        """,
                    [
                        property.tenant_id,
                        property.name,
                        property.address,
                        property.city,
                        property.state,
                        property.zipcode,
                        property.picture_url,
                        property.description,
                        property_id,
                    ]
                )
            return PropertyUpdate(
                        id=str(property_id),
                        tenant_id=str(property.tenant_id),
                        name=property.name,
                        address=property.address,
                        city=property.city,
                        state=property.state,
                        zipcode=property.zipcode,
                        picture_url=property.picture_url,
                        description=property.description
                    )
        except Exception:
            traceback.print_exc()
            return Error(message="Update user properties failed")


    def delete_a_property(self, property_id: int) -> bool:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    db.execute(
                        """
                        DELETE FROM property
                        WHERE id = %s
                        """,
                        [property_id]
                    )
                return True
        except Exception:
            traceback.print_exc()
            return False
