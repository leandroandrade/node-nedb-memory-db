'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const db = require('../src/database/db')('users.test.db');
const app = require('../src/app')(db);

describe('save user', function () {
    it('should save user', (done) => {

        const newUser = { "username": "ivan.phoenix", "password": "123456" };

        chai.request(app)
            .post('/users')
            .send(newUser)
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);

                const { user } = res.body;
                expect(user).to.have.property('uuid');

                done();
            })
    });
});