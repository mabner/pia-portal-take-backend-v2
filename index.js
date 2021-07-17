require( 'dotenv' ).config();
require( './config/database' );
require( './config/github.strategy' );

const express = require( 'express' );
const PORT = process.env.PORT;
const cors = require( 'cors' );
const passport = require( 'passport' );
const session = require( 'express-session' );
const cookieParser = require( 'cookie-parser' );
const allowCors = require( './config/cors' );


// Declaring the routes
const indexRouter = require( './api/routes/index' );
const loginRouter = require( './api/routes/login' );
const logoutRouter = require( './api/routes/logout' );
const toolsRouter = require( './api/routes/tools' );

const server = express();
const bodyParser = require( 'body-parser' );


server.use( express.json() );
server.use( allowCors );
server.use( cookieParser() );
server.use( cors() );

// Passport
server.use( session( { secret: 'rainbow bbt', resave: false, saveUninitialized: false } ) );
server.use( bodyParser.urlencoded( { extended: false } ) );
server.use( passport.initialize() );
server.use( passport.session() );

// Using the routes
server.use( '/', indexRouter );
server.use( '/api/v1/login', loginRouter );
server.use( '/api/v1/logout', logoutRouter );
server.use( '/api/v1/tools', toolsRouter );

// Server
server.listen( PORT, () =>
{
	console.log( `Server listening on port ${ PORT }` );
} );
