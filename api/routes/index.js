const express = require('express');
const router = express.Router();
const FRONT_URL = process.env.FRONT_URL;

router.get('/', (req, res) => {
	res.json(`${req.user.displayName}`).redirect(FRONT_URL);
});

module.exports = router;
