const express = require('express');
const ensureAuthenticated = require('../../config/ensureAuthenticated');
const router = express.Router();

router.get('/', ensureAuthenticated, (req, res) => {
	req.session = null;
	req.logOut();
	res.redirect('/login');
});

module.exports = router;
