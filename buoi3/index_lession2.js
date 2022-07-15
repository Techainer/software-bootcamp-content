const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello');
}).listen(3000, () => {
    console.log("sever create successfully on port 3000");
})