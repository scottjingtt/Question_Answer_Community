/**
 * Service for sticky operations.
 */

'use strict';
const mongoose = require('mongoose'),//require: (import) create name space for js classes,get the particular module,from npm
    User = mongoose.model('Users');

/**
 * Throws error if error object is present.
 *
 * @param {Object} error {Error object}
 */
let throwError = function (error) {
    if (error) {
        throw Error(error);
    }
};

/**
 * Returns an array of sticky object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 * @param {function} callback {Sucess callback function}
 */
exports.search = function (params, callback) {
    User.find(params, function (err, users) {
        throwError(err);
        callback(users);
    });
};
//CRUD: create, read, update, delete

/**
 * Saves and returns the new sticky object.
 *
 * @param {Object} user {Sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.save = function (user, callback) {//create a new object inside mongodb
    let newUser = new User(user);
    newUser.hash = bcrypt.hashSync(user.password, 10);
    newUser.save(function (err, user) {
        throwError(err);
        callback(user);
    });
    console.log("put here");
    console.log("something"+newUser.username+".");
};

/**
 * Returns the sticky object matching the id.
 *
 * @param {string} stickyId {Id of the sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.get = function (userId, callback) {
    User.findById(userId, function (err, user) {
        throwError(err);
        callback(user);
    });
};

/**
 * Updates and returns the sticky object.
 *
 * @param {Object} sticky {Sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.update = function (user, callback) {
    user.modified_date = Date.now;
    User.findOneAndUpdate({
        _id: user._id
    }, user, {
        new: true
    }, function (err, user) {
        throwError(err);
        callback(user);
    });
};

/**
 * Deletes the sticky object matching the id.
 *
 * @param {string} stickyId {Id of the sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.delete = function (userId, callback) {
    User.remove({
        _id: userId
    }, function (err, task) {
        callback();
    });
};

var Q = require('q');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
exports.authenticate = function (username, password) {
    console.log("auth service here "  + username + "  " + password );
    var deferred = Q.defer();

    User.findOne({ username: username }, function (err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        console.log("hash  " + user.hash);
        if (user && bcrypt.compareSync(password, user.hash)) {
            // authentication successful
            deferred.resolve({
                _id: user._id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: jwt.sign({ sub: user._id }, "iCommunity")
            });
            console.log("auth service successful -- ");
        } else {
            // authentication failed
            console.log("auth service failed");
            deferred.resolve();
        }
    });

    return deferred.promise;
}