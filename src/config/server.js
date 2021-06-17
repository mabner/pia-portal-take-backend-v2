require( 'dotenv' ).config();

const port = process.env.PORT;

const {
  urlencoded,
  json
} = require( 'body-parser' );

const express = require( 'express' );
const server = express();

// Middlewares
server.use( urlencoded( {
  extended: true
} ) );
server.use( json() );

server.listen( port, () => console.log( `Server listening on port ${ port }!` ) );

module.exports = server;
