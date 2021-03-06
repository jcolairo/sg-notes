/* global describe, it, beforeEach */

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var expect = chai.expect;
var request;

chai.should();
chai.use(chaiHttp);

// We are looking for HTML that looks like this:
// <a href="/users/58cbb8e616f8b0228f71b315">
// We can the extract the user ID from the `href` attribute using a regex.
function getFirstUserIdFromUserListHTML(html) {
  var regEx = /\/users\/[0-9a-f]+/;
  var result = regEx.exec(html)[0];
  var pathElements = result.split('/');

  return pathElements[2];
}

function generateUniqueFirstName () {
  return 'firstName' + Math.random();
}

describe('Users', function () {
  beforeEach(function () {
    request = chai.request(app);
  });

  describe('GET', function () {
    it('should return error for invalid URL GET', function (done) {
      request
        .get('/invalid_url')
        .end(function (err) {
          expect(err).not.to.be.null;
          done();
        });
    });
    it('should list all users for GET /users', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          expect(err).to.be.null;
          res.should.have.status(200);
          res.should.be.html;
          res.text.should.match(/User list/);
          done();
        });
    });
  });
// Test for PUT/UPDATE
  describe('PUT', function () {
    it('should return error for non-existent user id', function (done) {
      request
        .put('/users/non-existent-user-id')
        .end(function (err, res) {
          res.should.have.status(404);
          done();
        });
    });
    it('should return correct result for existing user', function (done) {
      request
        .get('/users/')
        .end(function (err, res) {
          var userId = getFirstUserIdFromUserListHTML(res.text);

          request
            .put('/users/' + userId)
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .send({firstName: 'testUpdateFirstName', lastName: 'testUpdateLastName', email: 'testUpdateEmail'})
            .end(function (err, res) {
              res.should.have.status(200);
              res.text.should.match(/testUpdateFirstName/);
              res.text.should.match(/testUpdateLastName/);
              done();
            });
        });
    });
  });
// Test for POST/CREATE
  describe('POST', function () {
    it('Should return error when firstName is blank', function (done) {
      request
      .post('/users')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ firstName: '', email: 'testPostEmail'})
      .end(function (err, res) {
        var jsonResponse = JSON.parse(res.text);

        res.should.have.status(400);
        expect(jsonResponse).to.be.an('array');
        expect(jsonResponse.length).to.equal(1);
        expect(jsonResponse[0].path).to.equal('firstName');
        console.log('jsonResponse:', jsonResponse);
        done();
      });
    });
    it('Should return error when email is blank', function (done) {
      request
        .post('/users')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .send({ firstName: 'testPostFirstName', email: ''})
        .end(function (err, res) {
          var jsonResponse = JSON.parse(res.text);

          res.should.have.status(400);
          expect(jsonResponse).to.be.an('array');
          expect(jsonResponse.length).to.equal(1);
          expect(jsonResponse[0].path).to.equal('email');
          console.log('jsonResponse:', jsonResponse);
          done();
        });
    });
    it.only('should create new user when input data is valid', function (done) {
      var testPostFirstName = generateUniqueFirstName();

      request
      .post('/users')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ firstName: testPostFirstName, email: 'testPostEmail'})
      .end(function (err, res) {
        var fistNameRegExp = new RegExp(testPostFirstName);

        res.should.have.status(200);
        res.text.should.match(fistNameRegExp);
        done();
      });
    });
  });

// Test for DELETE/DESTROY
  describe('DELETE', function () {
    it('should return error for non-existent user id', function (done) {
      request
        .delete('/users/non-existent-user-id')
        .end(function (err, res) {
          res.should.have.status(404);
          done();
        });
    });
    it('should return correct result for existing user', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          var userId = getFirstUserIdFromUserListHTML(res.text);

          request
            .delete('/users/' + userId)
            .end(function (err, res) {
              res.should.have.status(200);
              done();
            });
        });
    });
  });
});
