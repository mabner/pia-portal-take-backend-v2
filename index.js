require('dotenv').config();
require('./config/database');

const express = require('express');
const PORT = process.env.PORT;
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const allowCors = require('./config/cors');
const { urlencoded } = require('express');
const server = express();

// Declaring the routes
const indexRouter = require('./api/routes/index');
const toolsRouter = require('./api/routes/tools');

server.use(express.json());
server.use(allowCors);
server.use(cookieParser());

server.use(
	session({ secret: 'rainbow_bbt', resave: false, saveUninitialized: true })
);
server.use(urlencoded({ extended: false }));

// Passport
server.use(passport.initialize());
server.use(passport.session());

passport.serializeUser(function (user, done) {
	done(null, user);
});

passport.deserializeUser(function (id, done) {
	done(null, id);
});

passport.use(
	new GitHubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			callbackURL: process.env.GITHUB_CALLBACK_URL,
		},
		function (accessToken, refreshToken, profile, done) {
			done(null, profile);
		}
	)
);

server.get(
	'/auth/github',
	passport.authenticate('github', { scope: ['user:email'] })
);
server.get(
	'/auth/github/callback',
	passport.authenticate('github', { failureRedirect: '/login' }),
	function (req, res) {
		res.redirect('/');
	}
);

server.get('/login', (req, res) => {
	if (req.user) {
		return res.redirect('/');
	}
	res.redirect('/map');
});

server.get('/logout', (req, res) => {
	req.session = null;
	req.logOut();
	res.redirect('/login');
});

// Using the routes
server.use('/', indexRouter);
server.use('/api', indexRouter);
server.use('/api/v1', indexRouter);
server.use('/api/v1/tools', toolsRouter);

// Server
server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
