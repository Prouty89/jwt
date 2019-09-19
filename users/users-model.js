const db = require('../data/dbConfig.js');

const add = user => {
    return db('users')
    .insert(user, 'id')
    .then(([id]) => id)
}

function findBy(where) {
    return db('users').where(where)
}

function findByUsername(username) {
    return findBy({ username }).first();
}

function login(filter) {
    return db('users').where(filter);
}

const get = () => {
    return db('users')
};


module.exports = {
    add,
    findBy,
    findByUsername,
    get,
    login
};