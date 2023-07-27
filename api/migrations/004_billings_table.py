steps = [
    [
        """
        CREATE TABLE billings (
            id SERIAL PRIMARY KEY NOT NULL,
            tenant_id INT UNIQUE REFERENCES accounts(id),
            name VARCHAR(1000) NOT NULL,
            card_number VARCHAR(16) NOT NULL,
            expirydate VARCHAR(7) NOT NULL,  
            cvv VARCHAR(3) NOT NULL
        );
        """,
        """
        DROP TABLE billings;
        """,
    ]
]
