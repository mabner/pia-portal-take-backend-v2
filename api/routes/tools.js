const express = require('express');
const router = express.Router();
const tools = require('../models/tools');

// Get all tools
router.get('/', async (req, res) => {
	await tools
		.find()
		.then((tools) => {
			res.status(200).json(tools);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

// Get tool by ID
router.get('/:id', async (req, res) => {
	await tools
		.findOne({
			_id: req.params.id,
		})
		.then((tool) => {
			res.status(200).json(tool);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

// Post a new tool
router.post('/', async (req, res) => {
	const newTool = new tools(req.body);
	newTool
		.save()
		.then((tool) => {
			res.status(201).json(tool);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

// Update an existing tool
router.put('/:id', async (req, res) => {
	await tools
		.findOneAndUpdate(
			{
				_id: req.params.id,
			},
			req.body,
			{
				new: true,
			}
		)
		.then((tool) => {
			res.status(200).json(tool);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

// Delete tool by ID
router.delete('/:id', async (req, res) => {
	await tools
		.findOneAndDelete({
			_id: req.params.id,
		})
		.then((tool) => {
			res.status(200).json(tool);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

module.exports = router;
