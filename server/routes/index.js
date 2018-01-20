const router = require('express').Router();

router.use('/recipes', require('./recipe'));

module.exports = router;