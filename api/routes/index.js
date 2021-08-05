const express = require('express');
const router = express.Router();

const FRONT_URL = process.env.FRONT_URL;

router.get('/', function (req, res, next) {
	res.redirect(FRONT_URL);
});

module.exports = router;
