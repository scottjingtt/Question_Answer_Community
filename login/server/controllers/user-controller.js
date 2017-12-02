/**
 * Controller for user endpoints.
 */
//make controller as light as possible

'use strict';
//import user service.
const userService = require('../services/user-service');

/**
 * Returns a list of stickies in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    userService.search({}, function (users) {
        response.status(200);
        response.json(users);
    });
};

/**
 * Creates a new user with the request JSON and
 * returns user JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    let newUser = Object.assign({}, request.body);
    userService.save(newUser, function (user) {
        response.json(user);
    });
};

/**
 * Returns a user object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    userService.get(request.params.userId, function (user) {
        response.json(user);
    });
};

/**
 * Updates and returns a user object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    let user = Object.assign({}, request.body);;
    user._id = request.params.userId;
    userService.update(user, function (user) {
        response.json(user);
    });
};

/**
 * Deletes a user object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    userService.delete(request.params.userId, function (user) {
        response.json({
            message: 'User Successfully deleted'
        });
    });
};