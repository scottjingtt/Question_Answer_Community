'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for sticky object.
 */
let UserSchema = new Schema({
    /**
     * Title of the sticky.
     */
    username: {
        type: String,
        required: "username is required"
    },
    /**
     * Title of the sticky.
     */
    password: {
        type: String,
        required: "password is required"
    },
    /**
     * Sticky created date.
     */
    created_date: {
        type: Date,
        default: Date.now
    },
    /**
     * Sticky content.
     */
    firstName: {
        type: String
    },
    /**
     * Sticky content.
     */
    lastName: {
        type: String
    },
    /**
     * Sticky content.
     */
    email: {
        type: String,
        required: "email is required"
    },
    /**
     * user's majors
     */
    tags: {
        type: [String]
    },
    hash:{
        type: String
    }

}, {
    versionKey: false
});

module.exports = mongoose.model('Users', UserSchema);