'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for question object.
 */
let QuestionSchema = new Schema({
    /**
     * Title of the question.
     */
    title: {
        type: String,
        required: "title is required"
    },
    /**
     * Question created date.
     */
    created_date: {
        type: Date,
        default: Date.now
    },
    /**
     * Question content.
     */
    content: {
        type: String
    },
    /**
     * Last modified date.
     */
    modified_date: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('Questions', QuestionSchema);