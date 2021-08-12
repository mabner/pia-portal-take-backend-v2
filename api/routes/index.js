const express = require('express');
const passport = require('passport');

const GitHubStrategy = require('passport-github2').Strategy;

const router = express.Router();
const FRONT_URL = process.env.FRONT_URL;

router.get('/', (req, res) => {
	const user = req.user.displayName;
	return res.redirect(FRONT_URL);
});

router.get(
	'/auth/github',
	passport.authenticate('github', { scope: ['user:email'] })
);
router.get(
	'/auth/github/callback',
	passport.authenticate('github', { failureRedirect: '/login' }),
	function (req, res) {
		res.redirect(FRONT_URL + '/map');
	}
);

module.exports = router;
