const Tools = require( './tools' );

Tools.methods( [ 'get', 'post', 'put', 'delete' ] );

// Enforces validation on updates
Tools.updateOptions( { new: true, runValidators: true } );
