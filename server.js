var express = require('express');
var fs = require('fs');
var request = require('request');
var app     = express();

app.use(express.static('src/main'));

app.get('/scrape', function(req, res){
	var url = 'http://thecatapi.com/api/images/get?format=html&results_per_page=50';

	request(url, function(err, response, html){
		if(err){ throw err }
		res.send(html)
	});

})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app; 