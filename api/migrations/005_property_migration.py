steps = [
    [
        """
        CREATE TABLE property (
            id SERIAL PRIMARY KEY NOT NULL,
            landlord_id INT REFERENCES accounts(id) ON DELETE CASCADE NOT NULL,
            tenant_id INT REFERENCES accounts(id),
            name VARCHAR(100) NOT NULL,
            address VARCHAR NOT NULL,
            city VARCHAR NOT NULL,
            state VARCHAR NOT NULL,
            zipcode INT NOT NULL,
            picture_url TEXT,
            description TEXT
        )
        """,
        """
        DROP TABLE property;
        """
    ]
]
