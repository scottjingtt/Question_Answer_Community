/**
 * Question endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    console.log("Route here");
    const questionController = require('../controllers/question-controller');
    // Question Routes for search and create.
    app.route('/api/questions')
        .get(questionController.list)
        .post(questionController.post);

    // Question Routes for get, update and delete.
    app.route('/api/questions/:questionId')
        .get(questionController.get)
        .put(questionController.put)
        .delete(questionController.delete);

    app.route('/api/questions/category/:questionCategory')
        .get(questionController.find)
};