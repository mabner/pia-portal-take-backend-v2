require('dotenv').config();
require('./config/database');
require('./config/github.strategy');
require('./config/cors');

const express = require('express');

const PORT = process.env.PORT;
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const allowCors = require('./config/cors');
const { urlencoded } = require('express');

const server = express();

// Declaring the routes
const indexRouter = require('./api/routes/index');
const toolsRouter = require('./api/routes/tools');
const mapRouter = require('./api/routes/map');
const loginRouter = require('./api/routes/login');
const logoutRouter = require('./api/routes/logout');

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

// Using the routes
server.use('/', indexRouter);
server.use('/api/v1/tools', toolsRouter);
server.use('/map', mapRouter);
server.use('/login', loginRouter);
server.use('/logout', logoutRouter);

// Server
server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});

module.exports = server;
