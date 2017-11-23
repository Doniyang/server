var utils = require('./utils.js');
module.exports = function servletConfig(options) {
	var cfg = {};
	if (utils.isArray(options)) {
		for (var i = 0, ii = options.length; i < ii; i++) {
			if (utils.isObject(options[i]) && options[i].hasOwnProperty('path') && options[i].hasOwnProperty('next') && utils.isFunction(options[i].next)) {
				cfg[options[i].path] = options[i].next;
			}
		}
	}
	return cfg;
};