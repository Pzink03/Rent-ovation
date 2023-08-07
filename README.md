## Rent-ovation

Team:

- Pete Zink
- Darren Bowser
- Iliana Jolie Avridor
- Kapil Adhikari

Rent-ovation - One stop for property managers and renters to manage their properties.

## Design

Design

Wireframe
API
Schemas

## Intended Market

Introducing "Rent-ovation" - The All-In-One Property Management App for Landlords and Tenants!

Are you a landlord struggling to keep track of your properties, appointments with potential tenants, and rental payments? Or are you a tenant trying to find your perfect home and stay organized with rent payments? Look no further! Rent-ovation is here to simplify the property management experience for both landlords and tenants.

Experience the convenience, efficiency, and peace of mind Rent-ovation offers to both landlords and tenants. Streamline your property management and rental experience with Rent-ovation today!

## Functionality

Key Features - MVP
-Visitors to the site will have the option to learn more about the site through our about page that will also contain our user testimonials.
-Users are able to sign up for landlord or tenant accounts
-Logged in users Navbar will change from sign up and login to home and logout
-Home will take the tenant and the landlord to different home pages depending on the user type
-Tenants can log in to their account and view their rental property
-If the tenant has no properties it will notify them
-Logged in tenants can manage their rental property.
-Logged in tenants can book appointments with their landlord.
-When booking an appointment you can state the urgency and the issue
-Landlords can log into their account and view their properties
-If the landlord has no properties he will be notified and asked to add them
-If the landlord has no appointments the landlord will be notified
-Logged in landlords can add & manage properties.
-The landlord can only add properties to tenant accounts that don't have a property assigned
-Each property will display on its own individual property card
-Logged in landlords can manage appointments with tenants.
-Each appointment will display on its own individual appointment card

## Project Initialization

To fully enjoy this application on your local machine, please follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run docker volume create pg-admin
4. Run docker volume create postgres-data
5. Run docker compose build
6. Run docker compose up

Installation

Fork repository at: https://gitlab.com/jolieiliana/module3-project-gamma

Clone repository to local by running: git clone https://gitlab.com/jolieiliana/module3-project-gamma

Create local database by running: docker volume create module3-project-gamma-data

Build images and containers by running: docker compose build

Bring up the containers by running: docker compose up

-Access the front-end UI through browser at: http://localhost:3000/
-Access the FastAPI backend at http://localhost:8000/docs

Maintainers

@jolieiliana
@darrenjbwsr
@PZink03
@adhkapil10
