const mongoose = require( 'mongoose' );

const url = process.env.MONGO_ATLAS;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

const openConnection = () =>
    mongoose.connect( url, options ).then( function ()
    {
        console.log( 'Mongo Atlas connected' );
    } ).catch( function ( error )
    {
        console.log( error );
    } );

module.exports = {
    openConnection,
};
