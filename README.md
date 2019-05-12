## SQL injection target site

This is an auxiliary project for my capestone project, it is a template website providing general entry points on receving malicious traffic for **SQL injection**.

This website is built with (and any result may relate to practical version of modules):
- [Node.js](https://nodejs.org/en/) as backend runtime.
- [Mongoose](https://mongoosejs.com/) as database connection.
- [Express](https://expressjs.com/) as web framework.
- [Pug](https://pugjs.org/api/getting-started.html) as template engine.
- [MongoDB](https://www.mongodb.com/) as **target** database.

## Template Site Structure

### Basic endpoints

- [x] "/" homepage 
  - [x] GET with user authentication token not set shall include options for register and login
- [x] "/register" register page can be GET and POST
  - [x] GET method would return the register page
  - [x] POST method would allow posting user data to server for registering
- [x] "/login" login page can be GET and POST
  - [x] GET method would return the login page
  - [x] POST method would allow posting username + password for login
- [x] "/username" onkeyup event POST check whether intended username is available
- [x] "/password" onkeyup event POST check whether intended password is strong enough
- [x] "/search" POST method would post search query to the server asking result
- [x] "/account" after login, a account page should be shown.
- [x] "/movies" POST method as RESTful API posting a movie to movies collection.

## Endpoints for mounting an SQL injection

- Register page form submission.
- Login page form submission.
- Index page search form submission.
- "POST /movies" RESTful API access.

## Normal usage

- Head to register page register a new **username/password**
- Test Login using registered **username/password**
- In home page search any of the following list of movie titles.
    - Mission Impossible 1
    - Mission Impossible 2
    - Mission Impossible 3
    - Mission Impossible 4
    - Mission Impossible 5
    - Mission Impossible 6
    - Jurassic Park 1
    - Jurassic Park 2
    - Jurassic Park 3
    - the bourne identity
    - the bourne supremacy
    - the bourne ultimatum

For current setup they shall all show you 10 in stock with daily rental rate at 10.
