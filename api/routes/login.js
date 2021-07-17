const express = require( 'express' );
const router = express.Router();

router.get( '/', function ( req, res )
{
	res.render( 'login', { user: req.user } );
} );

module.exports = router;