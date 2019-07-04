'use strict';

const request = require('supertest');

const db = require('../src/database/db')('users.test.db');
const app = require('../src/app')(db);

describe('get users', function () {
    it('should return all users', (done) => {

        request(app)
            .get('/users')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                const { users } = res.body;
                expect(users).not.toBeNull();
                expect(users).not.toBeUndefined();

                const size = users.length;
                expect(size).not.toBe(0);

                return done();
            });
    });

    it('should return all property users', (done) => {

        request(app)
            .get('/users')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                const { users } = res.body;

                users.forEach(u => {
                    expect(u).toHaveProperty('username');
                    expect(u).toHaveProperty('password');
                    expect(u).toHaveProperty('uuid');
                });

                return done();
            });
    });
});