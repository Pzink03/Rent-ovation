from pydantic import BaseModel
from typing import Optional, List, Union
from queries.pool import pool

class Error(BaseModel):
    message: str


class PropertyIn(BaseModel):
    landlord_id: int
    tenant_id: Optional[int]
    name: str
    address: str
    city: str
    state: str
    zipcode: int
    picture_url: Optional[str]
    description: Optional[str]


class PropertyOut(BaseModel):
    id: int
    landlord_id: int
    tenant_id: Optional[int]
    name: str
    address: str
    city: str
    state: str
    zipcode: int
    picture_url: Optional[str]
    description: Optional[str]


class PropertyList(BaseModel):
    properties: List[PropertyOut]


class PropertyRepository:
    def create(self, property: PropertyIn) -> Union[PropertyOut, Error]:
        try:
            with pool.connection() as conn:
                with conn.cursor() as db:
                    result = db.execute(
                        """
                        INSERT INTO property
                            (landlord_id, tenant_id, name, address, city, state, zipcode, picture_URL, description)
                        VALUES
                            (%s,%s,%s,%s,%s,%s,%s,%s,%s)
                        RETURNING id;
                        """,
                        [
                            property.landlord_id,
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
                    id = result.fetchone()[0]
                    old_data = property.dict()
                    return PropertyOut(id=id, **old_data)
        except Exception:
            return {"message": "Create did not work"}
