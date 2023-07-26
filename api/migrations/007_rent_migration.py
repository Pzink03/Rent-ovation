steps = [
    [
        """
        CREATE TABLE rent (
            id SERIAL PRIMARY KEY NOT NULL,
            amount_due INT NOT NULL,
            due_date DATE NOT NULL,
            property_id INT REFERENCES property(id) ON DELETE CASCADE NOT NULL,
            status_id INT REFERENCES status(id) NOT NULL
        )
        """,
        """
        DROP TABLE rent;
        """
    ]
]
