require('dotenv').config();

const express = require('express');
const PORT = process.env.PORT;
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const allowCors = require('./config/cors');
const logger = require('morgan');

// Declaring the routes
const indexRouter = require('./api/routes/index');
const loginRouter = require('./api/routes/login');
const logoutRouter = require('./api/routes/logout');
const toolsRouter = require('./api/routes/tools');

const server = express();

require('./config/database');
require('./config/github.strategy');
const bodyParser = require('body-parser');

server.use(logger('dev'));
server.use(express.json());
server.use(allowCors);
server.use(cookieParser());

// Passport
server.use(session({secret: 'rainbow bbt', resave: false, saveUninitialized: false}));
server.use(bodyParser.urlencoded({extended: false}));
server.use(passport.initialize());
server.use(passport.session());

// Using the routes
server.use('/', indexRouter);
server.use('/login', loginRouter);
server.use('/logout', logoutRouter);
server.use('/api/v1/tools', toolsRouter);

// Server
server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
