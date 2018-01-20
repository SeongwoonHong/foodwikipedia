const router = require('express').Router();

router.use('/recipes', require('./recipe'));
router.use('/articles', require('./articles'));
router.use('/youtube', require('./youtube'));

module.exports = router;
