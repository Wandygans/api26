const express = require('express')
var router = express.Router();
__path = process.cwd()
const fs = require('fs')
const { getBuffer } = require('../lib/function')

const { gempa } = require('../scraper/gempa') 

router.get('/infogempa', async(req, res) => {
	var query = req.query.query
	if (!query) return res.json({ message: 'masukan parameter query' })
	var result = await gempa(query)
	res.json({ result })
})