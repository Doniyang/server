module.exports = [{
	path: '/login.do',
	next: function(req, res) {
		res.writeHead(200, {
			"content-type": "text/html"
		});
		res.end("<h1>" + JSON.stringify(req.query) + "</h1>");
	}
}]