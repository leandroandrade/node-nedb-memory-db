'use strict';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

const app = require('../src/app');

describe('save user', function () {
    it('should save user', function () {

        const user = { "username": "paul.phoenix", "password": "123456" };

        chai.request(app)
            .post('/users')
            .send(user)
            .end((err, res) => {
                expect(res.statusCode).to.equal(201);

                const newUser = res.body;
                expect(newUser).to.not.have.property('uuid');

            })
    });
});