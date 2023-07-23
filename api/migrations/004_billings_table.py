steps = [
    [
        ## Create the table
        """
        CREATE TABLE billings (
            id SERIAL PRIMARY KEY NOT NULL,
            name VARCHAR(1000) NOT NULL,
            card_number VARCHAR(16) NOT NULL,
            expirydate DATE NOT NULL,
            cvv VARCHAR(3) NOT NULL

        );
        """
        ## Drop the table
        """
        DROP TABLE billings;
        """
    ]
]