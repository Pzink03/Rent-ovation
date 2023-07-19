steps = [
    [
        """
        CREATE TABLE status (
            id SERIAL PRIMARY KEY NOT NULL,
            status_label VARCHAR(100) NOT NULL UNIQUE
        );
        """,
        """
        DROP TABLE status;
        """,
    ]
]
