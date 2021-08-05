const FRONT_URL = process.env.FRONT_URL;

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect(FRONT_URL);
}

module.exports = ensureAuthenticated;
