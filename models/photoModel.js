var mongoose = require('mongoose');
// Setup schema
var photoSchema = mongoose.Schema({
    photoBASE64: {
        type: String,
        required: true
    },
    photoWords: [{
        type: String
    }],
    userId: {
        type: String,
        required: true
    }
});
// Export Contact model
var Photo = module.exports = mongoose.model('photo', photoSchema);
module.exports.get = function(callback, limit) {
    Photo.find(callback).limit(limit);
}