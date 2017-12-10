/**
 * Controller for question endpoints.
 */

'use strict';
//import question service.
const questionService = require('../services/question-service');

/**
 * Returns a list of questions in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    questionService.search({}, function (questions) {
        response.status(200);
        response.json(questions);
    });
};

/**
 * Creates a new question with the request JSON and
 * returns question JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    let newQuestion = Object.assign({}, request.body);
    questionService.save(newQuestion, function (question) {
        response.json(question);
    });
};

/**
 * Returns a question object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    questionService.get(request.params.questionId, function (question) {
        response.json(question);
    });
};

/**
 * Updates and returns a question object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    let question = Object.assign({}, request.body);
    question._id = request.params.questionId;
    // console.log(question);
    // console.log(question.answers);
    questionService.update(question, function (question) {
        response.json(question);
    });
};

/**
 * Deletes a question object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    questionService.delete(request.params.questionId, function (question) {
        response.json({
            message: 'question Successfully deleted'
        });
    });
};

exports.find = function(request, response){
    questionService.search({category: request.params.questionCategory}, function (questions) {
        response.status(200);
        response.json(questions);
    });
}
