const express = require('express')
const teapot_server = express()

teapot_server.get('/', function(req, res) {
	// see https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol
	return res.sendStatus(418);
})

teapot_server.listen(3000, function() {
	console.log('Putting the kettle on for tea');
})
