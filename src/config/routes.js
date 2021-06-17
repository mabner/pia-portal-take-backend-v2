const express = require( 'express' );


module.exports = function ( server )
{
    // API routes
    const router = express.Router();
    server.use( '/api', router );

    // Tools routes
    const toolsService = require( '../api/portal/toolsService' );
    // Register the URLs for the verbs defined in the toolsService file
    toolsService.register( router, '/tools' );
};