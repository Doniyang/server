var url = require('url');
var utils = require('./utils.js');
var httpServlet = require('./http-servlet.js');
var staticServlet = require('./static-servlet.js');

function dispatcherServlet(config, request, response) {
	var pathName = url.parse(request.url, true).pathname;
	if (utils.trim(pathName) === '/') {
		pathName += 'index.html';
	};
	console.log(pathName);
	if (config.hasOwnProperty(pathName) && utils.isFunction(config[pathName])) {
		httpServlet(request, response, config[pathName]);
	} else {
		console.log(staticServlet);
		staticServlet('/web-root', pathName, request, response);
	}

}

module.exports = dispatcherServlet;