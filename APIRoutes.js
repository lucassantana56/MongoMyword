// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function(req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to MongWord with love!'
    });
});


// Import user controller
var userController = require('./controller/userController');
var photoController = require('./controller/photoController');

// user routes
router.route('/user/register')
    .post(userController.register);

router.route('/user/login')
    .post(userController.login);

router.route('/user/index')
    .get(userController.index);

router.route('/photo/add')
    .post(photoController.add);

router.route('/photo/index')
    .get(photoController.index);

// Export API routes
module.exports = router;