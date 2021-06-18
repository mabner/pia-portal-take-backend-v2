require( 'dotenv' ).config();

const express = require( 'express' );
require( './api/config/database' );

const app = express();

app.use( express.json() );


const PORT = process.env.PORT;

app.listen( PORT, () =>
{
  console.log( `Server listening on port ${ PORT }` );
} );