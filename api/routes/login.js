const express = require('express');
const ensureAuthenticated = require('../../config/ensureAuthenticated');
const router = express.Router();
const FRONT_URL = process.env.FRONT_URL;

router.get('/', ensureAuthenticated, function (req, res, next) {
	res.redirect(FRONT_URL + '/home');
});

module.exports = router;
