'use strict';

const Datastore = require('nedb-promises');

let usersDB = Datastore.create({
    filename: 'users.db',
    autoload: true
});

const getUserDB = () => {
    return usersDB;
};

module.exports = {
    getUserDB
};