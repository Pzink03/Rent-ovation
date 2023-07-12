steps = [
    [
        """
        CREATE TABLE property (
            id SERIAL PRIMARY KEY NOT NULL,
            landlord_id INTEGER NOT NULL,
            tenant_id INTEGER,
            name VARCHAR(100) NOT NULL,
            address VARCHAR NOT NULL,
            city VARCHAR NOT NULL,
            state VARCHAR NOT NULL,
            zipcode INT NOT NULL,
            picture_URL TEXT,
            description TEXT
        )
        """,
        """
        DROP TABLE property;
        """
    ]
]
