const restful = require( 'node-restful' );
const mongoose = restful.mongoose;

const toolsSchema = new mongoose.Schema( {
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  usage: {
    type: String,
  },
  tURL: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
} );

module.exports = restful.model( 'Tools', toolsSchema );