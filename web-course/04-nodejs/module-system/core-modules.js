const http = require('http')

http.createServer((req, res) => {
	res.write('Good Morning!')
	res.end()
}).listen(8080)
