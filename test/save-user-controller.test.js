'use strict';

const request = require('supertest');

const db = require('../src/database/db')('users.test.db');
const app = require('../src/app')(db);

describe('save user', function () {
    it('should save user', (done) => {

        const newUser = { "username": "john.phoenix", "password": "123456" };

        request(app)
            .post('/users')
            .send(newUser)
            .expect(201)
            .end(function (err, res) {
                if (err) return done(err);

                return done();
            });
    });
});