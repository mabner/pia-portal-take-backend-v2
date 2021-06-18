require( 'dotenv' ).config();

const express = require( 'express' );
require( './api/config/database' );

const app = express();

app.use( express.json() );

const toolsRouter = require( './api/routes/tools' );

app.use( '/api/v1/tools', toolsRouter );

const PORT = process.env.PORT;

app.listen( PORT, () =>
{
  console.log( `Server listening on port ${ PORT }` );
} );