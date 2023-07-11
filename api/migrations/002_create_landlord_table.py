steps = [
    [
        """
        CREATE TABLE landlords (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(150) NOT NULL UNIQUE,
            password VARCHAR(100) NOT NULL CHECK(LENGTH(password) >= 8),
            password_confirmation VARCHAR(100) NOT NULL,
            CONSTRAINT password_match CHECK (password = password_confirmation)
        );
        """,
        """
        DROP TABLE landlords;
        """,
    ]
]
