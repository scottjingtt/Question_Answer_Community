// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Connect MongoDB
let mongoose = require('mongoose'); //created model loading here
mongoose.connect('mongodb://localhost/questionDB', { useMongoClient: true });
mongoose.Promise = global.Promise;

// Get our API routes
// const api = require('./server/routes/api');
let initApp = require('./server/app');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
// app.use('/api', api);
initApp(app);


// Catch all other routes and return the index file
app.get('*', (req, res) => {
  console.log("Request get");
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));