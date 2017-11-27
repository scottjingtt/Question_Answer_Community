'use strict';
module.exports = function (app) {
    //Initialize models
    console.log("app.js here");
    let questionModel = require('./models/question');

    //Initialize routes
    let questionRoutes = require('./routes/question-route');
    questionRoutes(app);
};