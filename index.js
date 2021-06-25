require('dotenv').config();
require('./config/database');

const express = require('express');
const server = express();
const allowCors = require('./config/cors');
const PORT = process.env.PORT;

// Declaring the routes
const toolsRouter = require('./api/routes/tools');

server.use(express.json());
server.use(allowCors);

// Using the routes
server.use('/api/v1/tools', toolsRouter);

// Server
server.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
