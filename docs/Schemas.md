Users Table

| Field | Type |
|---------|---------|
| id | SERIAL PRIMARY KEY NOT NULL |
| email | VARCHAR(150) NOT NULL UNIQUE |
| password | VARCHAR(100) NOT NULL CHECK(LENGTH(password) >=8) |
| is_landlord | BOOLEAN DEFAULT false |

Billings Table

| Field | Type |
|---------|---------|

| id | SERIAL PRIMARY KEY NOT NULL |
| tenant_id | INT UNIQUE REFERENCES accounts(id) |
| name | VARCHAR(1000) NOT NULL |
| card_number | VARCHAR(16) NOT NULL |
| expirydate | VARCHAR(7) NOT NULL |  
| cvv | VARCHAR(3) NOT NULL | 

Property Table

| Field | Type |
|---------|---------|

| id | SERIAL PRIMARY KEY NOT NULL |
| landlord_id | INT REFERENCES accounts(id) ON DELETE CASCADE NOT NULL |
| tenant_id | INT UNIQUE REFERENCES accounts(id) |
| name | VARCHAR(100) NOT NULL |
| address | VARCHAR NOT NULL |
| city | VARCHAR NOT NULL |
| state | VARCHAR NOT NULL |
| zipcode | INT NOT NULL | 
| picture_url | TEXT |
| description | TEXT |

Status Table

| Field | Type |
|---------|---------|

| id  | SERIAL PRIMARY KEY NOT NULL |
| status_label | VARCHAR(100) NOT NULL UNIQUE |

Rent Table

| Field | Type |
|---------|---------|

|id | SERIAL PRIMARY KEY NOT NULL |
| amount_due | INT NOT NULL |
| due_date | DATE NOT NULL |
| property_id | INT REFERENCES property(id) ON DELETE CASCADE NOT NULL |
| status_id | INT REFERENCES status(id) NOT NULL |

Appointment Table

| Field | Type |
|---------|---------|

| id | SERIAL PRIMARY KEY NOT NULL |
| issue | TEXT NOT NULL |
| created_on | DATE NOT NULL |
| property_id | INT REFERENCES property(id) ON DELETE CASCADE NOT NULL |
| status_id | INT REFERENCES status(id) NOT NULL |


