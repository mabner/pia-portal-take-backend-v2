const express = require('express');
const ensureAuthenticated = require('../../config/ensureAuthenticated');
const router = express.Router();
const FRONT_URL = process.env.FRONT_URL;

router.get('/', ensureAuthenticated, (req, res) => {
	req.session = null;
	req.logOut();
	res.redirect(FRONT_URL + '/login');
});

module.exports = router;
