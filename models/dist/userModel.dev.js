"use strict";

var mongoose = require('mongoose'); // Setup schema


var contactSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}); // Export Contact model

var Contact = module.exports = mongoose.model('user', contactSchema);

module.exports.get = function (callback, limit) {
  Contact.find(callback).limit(limit);
};