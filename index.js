require( 'dotenv' ).config();
require( './api/config/database' );

const express = require( 'express' );
const app = express();
const PORT = process.env.PORT;

// Declaring the routes
const toolsRouter = require( './api/routes/tools' );

app.use( express.json() );

// Using the routes
app.use( '/api/v1/tools', toolsRouter );

// Server
app.listen( PORT, () =>
{
  console.log( `Server listening on port ${ PORT }` );
} );