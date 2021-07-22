const mongoose = require('mongoose');

const url = process.env.MONGO_ATLAS;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
};

mongoose
	.connect(url, options)
	.then(function () {
		console.log('Mongo Atlas is connected');
	})
	.catch(function (err) {
		console.log(err);
	});
