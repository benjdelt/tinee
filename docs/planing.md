# Tinee

## Data

- Urls, short and long
- Users, name, password digests, emails


## User Stories

As a user, I want  to create an account
Given that I land on the app main page, when I click on Sign Up and fill out the form with my username, email and password, then I create an account

As a user, i want  to log in and log out with the right credentials
Given that I land on the app main page, when I click on Login and provide my email or username and my password, I create a new session.

As a user, I want  to provide a url and receive a shortened version
Given that I have an url to shorten, when I paste it in the form and submit, then the shortened version appears on the screen

As a user, I want  to access previous shortened links
Given that I log in, when I click on Home, then I have list of all the links I’ve shortened before.

As a user, I want  to share shortened links through copying and pasting.
Given that I have shortened a link, when I click on Copy, the shortened version is copied into my clipboard then I can share it

As a user, I want to be able to click on the short version of the url and be redirected to the long version.
Given that I have shortened a link, when I click on the short url, then I am redirect to the long url.

As a user, I want  to edit shortened urls
Given that I have shortened a link, when I click on Edit, I can change the long url then use the short one as before

As a user, I want  to delete shortened urls
Given that I have shortened a link, when I click on Delete, I erase the long and short versions of the url from my account.

As anyone, I want to be redirected to the long url when I access the short url.
Given that I browse the web, when I click on the short version of a url posted by someone, then I am redirected to the long url. 


## Tech Stack

Mongo
Express
React
Node


## Routes

GET / → Sign up / Login page
POST users → create user
POST users/id → login / logout

GET users/id/urls → all urls for user
POST users/id/urls → create url

(GET users/id/urls/id → single url)
PUT users/id/urls/id → edit url
DELETE users/id/urls/id → delete url

GET u/id → redirect to long url


## UI Framework

Material Design React


## Other Dependencies

Bcrypt
Cookie-parser
Body-parser
Dotenv
ejs
Mongoose
Nodemon
Axios