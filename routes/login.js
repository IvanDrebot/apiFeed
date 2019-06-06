let router = require('express').Router();
let loginController = require('../controller/login-controller');

router.get('/', loginController.getAll);
router.post('/', loginController.create);

module.exports = router;
