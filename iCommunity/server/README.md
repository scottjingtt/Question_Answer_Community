# Server

This project was generated with MongoDB, Express, NodeJS

## Development server
1. Start mongoDB first

2. Run `npm install`

3. Run `node server.js` to start server project



##Project Description(Server)

1. Token
Server will check each request url, except "'/users/authenticate', '/users/register','/api/questions'", if it has attribute of `token`. Except "login","register", get "questions" request, other request url if doesn't have "token" then will response "Not authorized".
2. user-route
`user-route` decides which function in `user-controller` will be used based on request url.
3. user-controller
`user-controller` exports functions to be called by `user-route`, which will call functions in `user-service` and will response to client.
4. user-service
Functions in `user-service` directly operate database and data, like create, delete and update user. When create user and update user information, "check if username already exist" and "create 'token' when login" happens here.