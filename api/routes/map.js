const express = require('express');
const router = express.Router();
const FRONT_URL = process.env.FRONT_URL;

router.get('/', (req, res) => {
	return res.redirect(FRONT_URL + '/map');
});

module.exports = router;
