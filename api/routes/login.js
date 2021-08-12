const express = require('express');
const ensureAuthenticated = require('../../config/ensureAuthenticated');
const router = express.Router();

router.get('/', ensureAuthenticated, function (req, res, next) {
	res.redirect('/map');
});

module.exports = router;
