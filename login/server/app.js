'use strict';
module.exports = function (app) {
    //Initialize models
    let userModel = require('./models/user');

    //Initialize routes
    let userRoutes = require('./routes/user-route');
    userRoutes(app);
    //app is nothing but initiat application
};