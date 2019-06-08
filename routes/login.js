let router = require('express').Router();
let loginController = require('../controller/login-controller');

router.post('/', loginController.create);

module.exports = router;
