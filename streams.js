const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    fs.readFile('./test2/big.txt', 'utf-8', (err, text) => {
        if (err) {
            res.statusCode = 500;
            return res.end('Error reading file');
        }
        res.end(text);
    });
});

server.listen(5000, () => {
    console.log('server Running successfully: localhost:5000');
});
