require('dotenv').config();
require('./config/database');
require('./config/github.strategy');

const express = require('express');
const PORT = process.env.PORT;
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const allowCors = require('./config/cors');

// Declaring the routes
const indexRouter = require('./api/routes/index');
const toolsRouter = require('./api/routes/tools');

const server = express();
const bodyParser = require('body-parser');

server.use(express.json());
server.use(allowCors);
server.use(cookieParser());
server.use(cors());

// Passport
server.use(
	session({ secret: 'rainbow bbt', resave: false, saveUninitialized: false })
);
server.use(bodyParser.urlencoded({ extended: false }));
server.use(passport.initialize());
server.use(passport.session());

server.get('/auth/error', (req, res) => res.send('Unknown Error'));
server.get(
	'/auth/github',
	passport.authenticate('github', { scope: ['user:email'] })
);
server.get(
	'/auth/github/callback',
	passport.authenticate('github', { failureRedirect: '/auth/error' }),
	function (req, res) {
		res.redirect('/');
	}
);

server.get('/logout', (req, res) => {
	req.session = null;
	req.logout();
	res.redirect('/');
});

// Using the routes
server.use('/', indexRouter);
server.use('/api/v1/tools', toolsRouter);

// Server
server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
