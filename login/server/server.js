let express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'), //created model loading here
cors = require('cors'),
bodyParser = require('body-parser'),
expressJwt = require('express-jwt');

// mongoose instance connection url connection
mongoose.connect('mongodb://localhost/userDB', { useMongoClient: true });
//'mongodb://localhost/stickyDB'
mongoose.Promise = global.Promise;


// use JWT auth to secure the api, the token can be passed in the authorization header or querystring
app.use(expressJwt({
    secret: "iCommunity",
    getToken: function (req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            return req.headers.authorization.split(' ')[1];
        } else if (req.query && req.query.token) {
            return req.query.token;
        }
        return null;
    }
}).unless({ path: ['/users/authenticate', '/users/register','/api/questions','/api/questions/:questionId'] }));


//Adding body parser for handling request and response objects.
app.use(cors());
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Initialize app
let initApp = require('./app');
initApp(app);

app.listen(port);
console.log('Users RESTful API server started on: ' + port);