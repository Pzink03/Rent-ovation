## July 22, 2023

Today I worked on:

\*React functionality to delete a property with our property API

Today I changed around the React components for our Landlord Page and our PropertyCard for better functionality. I made a separate PropertyCard component that would get a list of all the properties and a delete function that would send a Delete request to the property API Darren put in place. If the Delete response is okay we call our getProperties function again. This allows us to fetch all of our properties again without having to refresh the page.

Today I learned how to better write a SPA application by reading React documentation as well as watching the videos provided by Galvanize. This resulted in me reworking my LandlordPage and creating a PropertyCard component. This made my code much easier to read and also followed the React best practices closer than my original code.

## July 21, 2023

Today I worked on:

\*React functionality with our property API

Today I was able to get our landlord page to show the properties of the landlord that was signed in. We are making a call to the property API that Darren put in place to get a list of all the properties. Darren added extra functionality on the backend to filter the properties by the signed in user.

Initially the properties were showing up all on the same card so I decided I would make a property card component and pass it into our Landlord Page component. This allows us to have a new card created for every property in our DB.

## July 20, 2023

Today I worked on:

\*Tenant Page for our app

Today I worked on the design of our tenant page from our wire frame design. This page will render when the user signs in as a tenant. I was able to use a similar design used in the other pages.

## July 19, 2023

Today I worked on:

\*Landlord Page of our app

Today I worked on designing the page for when our user signs in as a landlord. Again I used flex box and grid from my previous design and added a sidebar to the landlord page to help with functionality.

I learned to use one css file and css specificity to change certain things on the landlord page but keep my homepage the same

## July 18, 2023

Today I worked on:

- The Homepage of our APP
  Today I picked up where I left of with the homepage and added backgrounds, colors, images, buttons, and some subtle animation. The buttons are acting as a placeholder until we get our functionality in place. I also added a testimonial section to the page using grid

I learned how to apply grid columns and grid rows to achieve a desired layout that can adapt to the size of the users screen.

## July 17, 2023

Today I worked on:

- The Homepage of our App

Today I worked on the css and styling of our homepage. I was able to create the layout from our wire frame by using a combination of flex box and css grid.

I learned how beneficial it can be to use grid to position your website layout and using flex box to be able to position the items inside the grid.

## July 12, 2023

## Jul 11, 2023

Today I worked on:

- Backend Authentication:

Today I worked through a number of errors concerning the hashed_password in the jwt-authentication. Eventually I was able to figure out what data was being passed into my function using print statements.

Be aware of the data you are receiving/sending. Print statements can make figuring out errors so much easier.

## July 10, 2023

Today, I worked on:

- Backend Authentication:

I had a tough time figuring out exactly how I wanted to make my table since we were going to have to different types of users for our website. What the team decided is that we would have a boolean value to differentiate from the two different types of users.

This allowed us to get to work on the authentication of a user using jwt-authentication

## June 30, 2023

Today, I worked on:

- Getting a single landlord from the database

Today I was able to get a single landlord by id and update their information through a PUT API call. After I got the PUT method to work I was able to get the Delete functionality to work as well.

Today I learned to make functions for bits of code that you have repeating itself. This makes things easier to read and more time conscious.

## June 29, 2023

Today, I worked on:

- CRUD functionality for the Landlord Table

Today I was able to create a landlord and also get all of our landlords that were created in the database. After that I worked on getting a single landlord from the DB since we would need that for our update and delete functionality.

I learned a lot from watching our videos on learn. They have become a blueprint for my API calls at this point.

## June 28, 2023

Today, I worked on:

- Landlord Table:

Today I started building out my table for our landlord. This was the first api call I made and I was able to create a landlord. I was also

Today I learned how to create my first table and how migrations were going to work with our postgreSQL database.

## June 27, 2023

Today, I worked on:

- The Database

## June 26, 2023

Today, I worked on:

- The Database

Today I worked on setting up a PostgreSQL Database for my team. This meant changing our docker yaml to include and create a postgres database as well as a FastAPI and GHI container to the designated ports. I also added pg-admin functionality so that we could access the admin panel for the remainder of the project as needed. I also updated our Dockerfile to run all of our necessary commands when our yaml is ran. I also included some code to run migrations when the containers start. I was also able to change the requirements.txt file to run all of the packages the application will need.

## June 23, 2023

Today, I worked on:

- The relationships our tables will have

Today my team and I discussed how we would be working out the relationships between our tables. We know we want the tenant table to have a relationship with the property table. Our rent table will also have a relationship with our billing table. We are also working on the idea of how to incorporate our 3rd Party API with our property table. We want to be able to search for an actual address in a search bar when we are adding a property as a landlord.

Today I learned more about using Excalidraw to lay out tables so the entire team could reference them and have a visual aid for the project. I believe this will help our team stay on the same page with our tables
