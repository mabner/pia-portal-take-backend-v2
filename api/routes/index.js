const express = require('express');
const router = express.Router();
const ensureAuthenticated = require('../../config/ensureAuthenticated');

router.get('/', ensureAuthenticated, function (req, res, next) {
	res.render('index');
});

module.exports = router;
