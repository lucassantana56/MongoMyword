// Import contact model
let Photo = require('../models/photoModel');

// Handle index actions
exports.index = function(req, res) {
    Photo.get(function(err, models) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "models retrieved successfully",
            data: models
        });
    });
};

// Handle create user actions
exports.add = function(req, res) {
    var photo = new Photo();
    photo.userId = req.body.userId;
    photo.photoBASE64 = req.body.photoBASE64;
    photo.photoWords = req.body.photoWords;

    // save the contact and check for errors
    photo.save(function(err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New photo created!',
            data: photo
        });
    });
};

// Handle view contact info
exports.get = function(req, res) {
    Photo.find({ userId: req.body.userId }, function(error, photo) {
        res.json({ message: 'photos found', data: photo });
    });
};