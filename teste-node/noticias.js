var http = require('http');

http.createServer( function(req ,res){

	res.end("<html><body>portal de noticias</body></html>");
});

server.listen(3000);