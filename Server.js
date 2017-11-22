var http = require('http');
var servletConfig = require('./core/config.js');
var dispatcherServlet = require('./core/index.js');
var routes = require('./config/router.js');
http.createServer(function(request, response) {
	dispatcherServlet(servletConfig(routes), request, response);
}).listen(3000);
console.log('Server is running');