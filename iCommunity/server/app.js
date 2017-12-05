'use strict';
module.exports = function (app) {
    //Initialize models
    let userModel = require('./models/user');

    //Initialize routes
    let userRoutes = require('./routes/user-route');
    userRoutes(app);
    //app is nothing but initiat application

    //Initialize models
    console.log("app.js here");
    let questionModel = require('./models/question');

    //Initialize routes
    let questionRoutes = require('./routes/question-route');
    questionRoutes(app);
};