steps = [
    [
        """
        CREATE TABLE appointment (
            id SERIAL PRIMARY KEY NOT NULL,
            issue TEXT NOT NULL,
            created_on DATE NOT NULL,
            property_id INT REFERENCES property(id) ON DELETE CASCADE NOT NULL,
            status_id INT REFERENCES status(id) NOT NULL
        )
        """,
        """
        DROP TABLE rent;
        """
    ]
]
