var utils = require('./utils.js');

function servletConfig(options) {
	var cfg = {};
	if (utils.isArray(options)) {
		for (var i = 0, ii = options.length; i < ii; i++) {
			if (utils.isObject(options[i]) && options[i].hasOwnProperty('path') && options[i].hasOwnProperty('next') && utils.isFunction(options[i].next)) {
				cfg[options[i].path] = options[i].callFn;
			}
		}
	}
	return cfg;
};
module.exports = servletConfig;