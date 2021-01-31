// Import contact model
let User = require('../models/userModel');

// Handle index actions
exports.index = function(req, res) {
    User.get(function(err, models) {
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
exports.register = function(req, res) {
    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;
    user.username = req.body.username;

    // save the contact and check for errors
    user.save(function(err) {
        // if (err)
        //     res.json(err);
        res.json({
            message: 'New user created!',
            data: user
        });
    });
};

// Handle view contact info
exports.login = function(req, res) {
    User.findOne({ username: req.body.username, password: req.body.password }, function(error, user) {
        res.json({ message: 'user found', data: user });
    });
};