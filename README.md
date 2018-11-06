# ReactProject
Profiles
Auth0 will manage the profile creation
Username-Password based authentication
App bar
The left side of the bar should have navigation links to all the routes 
The right side of the bar should have a clickable profile image which would open a dropdown with link to User profile route and button for logout.
Routes
Wireframes - https://drive.google.com/file/d/1EL0-_cgGDivw5CJkStZG-gqsQrUbuSmz/view?usp=sharing 
SignIn/SignUp
Identity provider - Auth0
You should use the custom flow for registration and sign in provided by Auth0. Do not use the Lock widget or hosted page.
https://auth0.com/docs/libraries/when-to-use-lock 
https://auth0.com/docs/libraries/custom-signup 
Fields validation:
Email
The email should be a valid 
Password
Min chars - 5

User Profile
The route should have two states - View and Edit
The data for the profile should be fetched from Auth0 and it should be updated appropriately. 
Use the default image from Auth0 as profile picture.
Items Summary (marvel characters, movies or events)
This route should render in a grid of cards the items that would be fetched from the API
When the user clicks on an item, he should be navigated to the items detail page
The item card should have thumbnail, name and description.
The action row of the card should have the following buttons:
Details - navigates the user to item details route
Add to Favorites/Remove from Favorites - a button which would add or remove the item to the favorites collection
Infinite scroll functionality should be implemented together with the list of items. New items should be fetched when the scroll position is near the end of the screen.

Item Details (marvel character, movie or event)
The route shows details for the item.
Based on the chosen API, the route should render a list of cards which would bring more context to the item:
Marvel API - list of comics where the character appear
Movie API - the cast of the movie
Events API - more events by the same artist
Infinite scroll functionality should be implemented together with the list of items. New items should be fetched when the scroll position is near the end of the screen.
Clicking on the card carret will open an element with more info about the item.

Favorite items
The route should render a collection of favorite items 
The presentation should have the same styles and functionality as the Items Summary route (cards + infinite scroll)
The data for the Favorites collection should be stored in the localStorage
The user should be able to filter the items by name and description.


