var path = require('path');
var type = require('./type.js');
var fs = require('fs');

function staticServlet(staticPath, pathName, request, response) {
	var filePath = path.join(path.dirname(__dirname), staticPath, pathName);
	fs.stat(filePath, function(err, stats) {
		if (!err && stats.isFile()) {
			fs.readFile(filePath, 'utf8', function(error, data) {
				if (error) {
					response.writeHead(404, {
						"content-type": "text/html"
					});
					response.end("<h1>404 Not Found</h1>");
				} else {
					var ext = path.extname(pathName).slice(1);
					var contentType = type[ext] || "text/plain";
					response.writeHead(200, {
						"content-type": contentType
					});
					response.end(data, 'utf8');
				}
			});
		} else {
			response.writeHead(404, {
				"content-type": "text/html"
			});
			response.end("<h1>404 Not Found</h1>");
		}
	});
};

module.exports = staticServlet;