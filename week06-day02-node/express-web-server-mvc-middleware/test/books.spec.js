/* global describe, it, beforeEach */

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var TestUtils = require('./test-utils');
// var expect = chai.expect;
var request;

chai.should();
chai.use(chaiHttp);

// We are looking for HTML that looks like this:
// <a href="/users/58cbb8e616f8b0228f71b315">
// We can the extract the user ID from the `href` attribute using a regex.

describe('Books', function () {
  beforeEach(function () {
    request = chai.request(app);
  });

  describe('PUT', function () {
    it('should return error for non-existent book id', function (done) {
      request
        .put('/users/non-existent-user-id')
        .end(function (err, res) {
          res.should.have.status(404);
          done();
        });
    });
    it('should return correct result for existing book', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          var bookId = TestUtils.getFirstBookIdFromUserPageHTML(res.text);

          request
            .put('/books/' + bookId)
            .end({ title: 'testTitle', author: 'testAuthor'})
            .end(function (err, res) {
              res.should.have.status(200);
              done();
            });
        });
    });
  });


  describe('DELETE', function () {
    it('should return error for non-existent book id', function (done) {
      request
        .delete('/books/non-existent-book-id')
        .end(function (err, res) {
          res.should.have.status(404);
          done();
        });
    });
    it('should return correct result for existing book', function (done) {
      request
        .get('/users')
        .end(function (err, res) {
          var userId = TestUtils.getFirstUserIdFromUserListHTML(res.text);

          request
            .get('/users/' + userId)
            .end(function (err, res) {
              var bookId = TestUtils.getFirstBookIdFromUserPageHTML(res.text);

              res.should.have.status(200);
              request
                .delete('/books/' + bookId)
                .send({ userId: userId })
                .end(function (err, res) {
                  var bookIdRegExp = new RegExp(bookId);
                  res.should.have.status(200);
                  res.text.should.not.match(bookIdRegExp);
                  done();
                });
            });
        });
    });
  });
});
