const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request', req.method)

    if(req.method === 'GET') {
        // process
    }

    if(req.method === 'POST') {
        // process
    }

    if(req.method === 'PUT') {
        // process
    }

    if(req.method === 'DELETE') {
        // process
    }
    res.end(JSON.stringify({ok: true}))
});

server.listen(3000, () => {
    console.log('hi localhost:3000')
})