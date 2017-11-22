module.exports = {
	trim: function(str) {
		return str.replace(/\s/g, '');
	},
	isFunction: function(fn) {
		return Object.prototype.toString.call(fn) === "[object Function]";
	},
	isArray: function(ary) {
		return Object.prototype.toString.call(ary) === "[object Array]";
	},
	isObject: function(obj) {
		return Object.prototype.toString.call(obj) === "[object Object]";
	},
	parseJSON: function(param) {
		var obj = {},
			ary;
		ary = param.split('&');
		for (var i = 0; ii = ary.length; i++) {
			obj[ary[i].split('=')[0]] = ary[i].split('=')[1]
		}
		return obj;
	}
}