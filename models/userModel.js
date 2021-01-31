var mongoose = require('mongoose');
// Setup schema
var userSchema = mongoose.Schema({
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
});
// Export Contact model
var User = module.exports = mongoose.model('user', userSchema);
module.exports.get = function(callback, limit) {
    User.find(callback).limit(limit);
}