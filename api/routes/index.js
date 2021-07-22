const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function (req, res, next) {
	res.render('index');
});

module.exports = router;
