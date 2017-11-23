var url = require('url');
var utils = require('./utils.js');

module.exports = function httpServlet(request, response, callback) {
	var body = "";

	request.query = url.parse(request.url, true).query;
	request.on('data', function(chunk) {
		body += chunk;
	}).on('end', function() {
		console.log(body);
		if (body != "") {
			request.body = utils.parseJSON(body)
		};
		callback(request, response);
	})
}