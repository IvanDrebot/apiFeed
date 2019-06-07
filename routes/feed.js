let router = require('express').Router();
let feedController = require('../controller/feed-controller');

router.get('/', feedController.getAll);
router.get('/:id', feedController.getById);
router.post('/', feedController.create);
router.delete('/:id', feedController.delete);

module.exports = router;
