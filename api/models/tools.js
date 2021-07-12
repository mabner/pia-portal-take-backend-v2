const mongoose = require('mongoose');

const toolsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
	},
	usage: {
		type: String,
	},
	tURL: {
		type: String,
		required: true,
	},
	//  TODO: Create updatedAt field
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('tools', toolsSchema);