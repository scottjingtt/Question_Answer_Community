# Server

This project was generated with MongoDB, Express, NodeJS

## Development server
1. Start mongoDB first

2. Run `npm install`

3. Run `node server.js` to start server project



## Project Description(Server)

--Question part:
1. question route routes for question related http request.
    `http://localhost:3000/api/questions`:
        get: get all questions
        post: added one new questions
    `http://localhost:3000/api/questions/:questionId`:
        get: get the question based on questionId
        put: update the question which has this questionId
        delete: delete this question based on questionId
    `http://localhost:3000/api/questions/category/:questionCategory`:
        get: get all questions based on one category 
    `http://localhost:3000/api/questions/:user/:userId`:
        get: get all questions based on username and userId
2. question controller is corresponding to a particular http request above. all get questions functions used `search()` function in question-service but with different parameters.
3. parameterized requests to question need to be authenticated.