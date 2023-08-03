const http = require("http")

const port = 3000;

const rotas = {
    '/': 'Node start.',
    '/books': 'Books page',
    '/authors': 'Authors page',
    '/publishers': 'Publishers page',
    '/infos': 'About the project',

}


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end(rotas[req.url])
})

server.listen(port, () => {
    console.log('Server UP! Port: ' + port)
})