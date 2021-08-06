const express = require('express');
var passport = require('passport');

const router = express.Router();
const FRONT_URL = process.env.FRONT_URL;
const ensureAuthenticated = require('../../config/ensureAuthenticated');

router.get('/', (req, res) => {
	const user = req.user.displayName;
	return res.redirect(FRONT_URL);
});

module.exports = router;
