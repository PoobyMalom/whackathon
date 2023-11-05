import http from 'http';
import * as database from './data';

const server = http.createServer(async (req, res) => {
    // THIS IS FOR CORS ERRORS
    res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Max-Age', '2592000'); // 30 days

    if (req.url === '/api/shoes') {
        try {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            const dataset = await database.shoes();
            res.write(dataset);
        } finally {
            res.end();
        }
    }
});

const port = 4000;

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
