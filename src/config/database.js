const mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;
require( 'dotenv' ).config();

const conString = process.env.MONGO_ATLAS;

//New Server Discover and Monitoring engine, removes the message about current being deprecated
mongoose.set( 'useUnifiedTopology', true );
//MongoDB connection
const connectionString = conString;

const openConnection = () =>
    mongoose.connect( connectionString, { useNewUrlParser: true } );

module.exports = {
    openConnection,
};
