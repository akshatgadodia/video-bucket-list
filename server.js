const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');

const port = process.env.PORT || 8000;

const middlewares = jsonServer.defaults({
    static: 'build'
});

server.use(middlewares);
// server.use(
//     jsonServer.rewriter({
//         '/api/*': '/$1',
//     })
// );
server.use(cors());
server.use('/api',router);

server.get('/website', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  })

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});