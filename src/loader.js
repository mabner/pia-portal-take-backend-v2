const server = require( './config/server' );
require( './config/database' );

// Execute the function set in routes.js and pass server as parameter
require( './config/routes' )( server );