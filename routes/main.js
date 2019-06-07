let router = require('express').Router();
let FeedRouter = require('./feed');
let LoginRouter = require('./login');

router.use('/login', LoginRouter);
router.use('/feed', FeedRouter);


module.exports = router;
