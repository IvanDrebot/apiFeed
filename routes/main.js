let router = require('express').Router();
let LoginRouter = require('./login');

router.use('/login', LoginRouter);


module.exports = router;
