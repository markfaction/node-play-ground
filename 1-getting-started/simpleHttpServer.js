const http = require('http');
const PORT = 1337;

http.createServer((request, response) => {
	response.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	response.write('A simple HTTP server written in node\n');
	response.end();
}).listen(PORT);

