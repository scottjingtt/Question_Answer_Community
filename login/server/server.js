let express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'), //created model loading here
cors = require('cors'),
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.connect('mongodb://localhost/userDB', { useMongoClient: true });
//'mongodb://localhost/stickyDB'
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(cors());
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(bodyParser.json());

//Initialize app
let initApp = require('./app');
initApp(app);

app.listen(port);
console.log('Users RESTful API server started on: ' + port);