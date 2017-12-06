/**
 * Controller for user endpoints.
 */
//make controller as light as possible

'use strict';
//import user service.
const userService = require('../services/user-service');
let throwError = function (error) {
    if (error) {
        throw Error(error);
    }
};
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
    // userService.save(newUser, function (user) {
        userService.create(newUser,function(user){
        response.json(user);
    });
};
exports.register = function(request, response) {
    let newUser = Object.assign({},request.body)
    userService.create(newUser,function(err,user){
        throwError(err);
        response.json(user);
    })
    .then(function(){
        response.sendStatus(200);
    })
    .catch(function(err){
        response.status(400).send(err);
    });
}

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

exports.getProfessors = function (request, response) {
    console.log(request.params.options);
    userService.searchProfessors({major:request.params.options}, function (user) {
        response.json(user);
    });
};

/**
 * Updates and returns a user object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
// exports.put = function (request, response) {
//     let user = Object.assign({}, request.body);;
//     user._id = request.params.userId;
//     userService.update(user, function (user) {
//         response.json(user);
//     });
// };
exports.put = function (request, response) {
    let user = Object.assign({}, request.body);
    // user._id = user._id;
    userService.updateInfo(user._id, user)
        .then(function (user) {
            if (user) {
                // authentication successful
                console.log("response " + user.username + " image: " + user.image);
                response.send(user);
            } else {
                // authentication failed
                response.status(400).send('Username or password is incorrect');
            }
        })
        .catch(function (err) {
            response.status(400).send(err);
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


exports.authenticate = function(request, response) {
    console.log("auth controlloer here " + request.body.username);
    userService.authenticate(request.body.username, request.body.password)
        .then(function (user) {
            if (user) {
                // authentication successful
                console.log("response " + user.username + " token: " + user.token);
                response.send(user);
            } else {
                // authentication failed
                response.status(400).send('Username or password is incorrect');
            }
        })
        .catch(function (err) {
            response.status(400).send(err);
        });
}