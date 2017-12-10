/**
 * Service for question operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Question = mongoose.model('Questions');

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
 * Returns an array of question object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 * @param {function} callback {Sucess callback function}
 */
exports.search = function (params, callback) {
    Question.find(params, function (err, questions) {
        throwError(err);
        callback(questions);
    });
};

/**
 * Saves and returns the new question object.
 *
 * @param {Object} question {Question object}
 * @param {function} callback {Sucess callback function}
 */
exports.save = function (question, callback) {
    let newQuestion = new Question(question);
    newQuestion.save(function (err, question) {
        throwError(err);
        callback(question);
    });
};

/**
 * Returns the question object matching the id.
 *
 * @param {string} questionId {Id of the question object}
 * @param {function} callback {Sucess callback function}
 */
exports.get = function (questionId, callback) {
    Question.findById(questionId, function (err, question) {
        throwError(err);
        callback(question);
    });
};

/**
 * Updates and returns the question object.
 *
 * @param {Object} question {Question object}
 * @param {function} callback {Sucess callback function}
 */
exports.update = function (question, callback) {
    question.modified_date = Date.now();
    Question.findOneAndUpdate({
        _id: question._id
    }, question, {
        new: true
    }, function (err, question) {
        throwError(err);
        callback(question);
    });
};

/**
 * Deletes the question object matching the id.
 *
 * @param {string} questionId {Id of the question object}
 * @param {function} callback {Sucess callback function}
 */
exports.delete = function (questionId, callback) {
    Question.remove({
        _id: questionId
    }, function (err, task) {
        callback();
    });
};
