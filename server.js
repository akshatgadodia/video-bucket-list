const jsonServer = require('json-server');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');

const port = process.env.PORT || 8000;

const middlewares = jsonServer.defaults({
    static: './build'
});

server.use(middlewares);
server.use(
    jsonServer.rewriter({
        '/api/*': '/$1',
    })
);
server.use(cors());
server.use(router);
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});