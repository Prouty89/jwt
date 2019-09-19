const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const usersRouter = require('./users/users-router');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger);

server.use('/users', usersRouter)

function logger(req, res, next) {
    const method = req.method;
    const url = req.url;
    const timestamp = Date.now();
    console.log(`${method} request to ${url} at ${timestamp}`);
    next();
}

server.get('/', (req, res) => {
    res.status(200).json('working!!')
})

module.exports = server;