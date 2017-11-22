var url = require('url');
var utils = require('./utils.js');

function httpServlet(request, response, callfn) {
	var body = "";
	request.query = url.parse(request.url, true);
	request.on('data', function(chunk) {
		body += chunk;
	}).on('end', function() {
		request.body = parseJSON(body);
		callfn(request, response);
	})
}