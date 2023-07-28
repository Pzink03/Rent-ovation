## Rent-ovation

Team:

- Pete Zink
- Darren Bowser
- Iliana Jolie Avridor
- Kapil Adhikari

Rent-ovation - One stop for property managers and renters to manage their properties.

## Design

## Intended Market

We are targeting property managers and renters who are looking for a streamlined user experience to manage their properties. They will be able to manage/book appointments and rental payments.

## Functionality

Visitors to the site will have the option t learn more about the site through our about page that will also contain our user testimonials.
Visitors to the site will be able to choose what type of user they want to sign up as.

- If the user signs up as a landlord they will be able to add an manage all of their properties unique to their account.
- The landlord will be get alerts when rent for a property is past due or if the tenant schedules an appointment with them.
- The landlord will be able to view a list of all his completed appointments.
- If the user signs up as a Tenant they will have their property linked to their account.
- The Tenant will be notified if their rent payment is past due

## Project Initialization

To fully enjoy this application on your local machine, please follow these steps:

1. Clone the repository down to your local machine
2. CD into the new project directory
3. Run docker volume create pg-admin
4. Run docker volume create postgres-data
5. Run docker compose build
6. Run docker compose up
   Rent-ovation

Introducing "Rent-ovation" - The All-In-One Property Management App for Landlords and Tenants!

Are you a landlord struggling to keep track of your properties, appointments with potential tenants, and rental payments? Or are you a tenant trying to find your perfect home and stay organized with rent payments? Look no further! Rent-ovation is here to simp lify the property management experience for both landlords and tenants.

Experience the convenience, efficiency, and peace of mind Rent-ovation offers to both landlords and tenants. Streamline your property management and rental experience with Rent-ovation today!

Key Features - MVP

Users are able to sign up for landlord or tenant accounts, log in, and log out.
Logged in tenants can add and manange rental property.
Logged in tenants can pay And manage your rental due date.
Logged in tenants book appointments with your landlord.
Logged in landlords can add & manage properties.
Logged in landlords can allow tenants to make rent payments.
Logged in landlords can keep track of rental property due dates.
Logged in landlords can manage appointments with tenants.

Design

Wireframe
API
Schemas

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
