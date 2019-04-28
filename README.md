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
- [ ] "/search" POST method would post search query to the server asking result
- [x] "/account" after login, a account page should be shown.

## Endpoints for mounting an SQL injection

- Register page form submission.
- Login page form submission.