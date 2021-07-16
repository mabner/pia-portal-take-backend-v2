const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function (req, res, next) {
	res.render('index', {user: req.session.passport.user});
});

router.get('/auth/github',
	passport.authenticate('github', {scope: ['user:email']}),
	function (req, res) {
	});

router.get('/auth/github/callback',
	passport.authenticate('github', {failureRedirect: '/login'}),
	function (req, res) {
		res.redirect('/api/v1/tools');
	});

module.exports = router;