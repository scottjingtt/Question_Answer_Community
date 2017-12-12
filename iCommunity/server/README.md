# Server

This project was generated with MongoDB, Express, NodeJS

## Development server
1. Start mongoDB first

2. Run `npm install`

3. Run `node server.js` to start server project



##Project Description(Server)

--User part

1. Token

Server will check each request url, except "'/users/authenticate', '/users/register','/api/questions'", if it has attribute of `token`. Except "login","register", get "questions" request, other request url if doesn't have "token" then will response "Not authorized".

2. user-route

`user-route` decides which function in `user-controller` will be used based on request url.
    * `http://localhost:3000/users`
        * .get(userController.list): Get all users list only when user identity is "admin".
    //Routes for get, update and delete.
    * `http://localhost:3000/users/:userId`
        * .get(userController.get): Get specific user information by ID.
        * .put(userController.put):Update user information
        * .delete(userController.delete): Delete user
    * `http://localhost:3000/users/authenticate`
        .post(userController.authenticate):User login, which will check username and password in request if match in database.
    * `http://localhost:3000/users/register`
        .post(userController.register):Create new user.
3. user-controller

`user-controller` exports functions to be called by `user-route`, which will call functions in `user-service` and will response to client.

4. user-service

Functions in `user-service` directly operate database and data, like create, delete and update user. When create user and update user information, "check if username already exist" and "create 'token' when login" happens here.

## Project Description(Server)

--Question part:
1. question route routes for question related http request.
    * `http://localhost:3000/api/questions`
        * get: get all questions.
        * post: added one new questions.
    * `http://localhost:3000/api/questions/:questionId`
        * get: get the question based on questionId.
        * put: update the question which has this questionId.
        * delete: delete this question based on questionId.
    * `http://localhost:3000/api/questions/category/:questionCategory`
        * get: get all questions based on one category.
    * `http://localhost:3000/api/questions/:user/:userId`
        * get: get all questions based on username and userId.
2. question controller is corresponding to a particular http request above. all get questions functions used `search()` function in question-service but with different parameters.
3. parameterized requests to question need to be authenticated.
