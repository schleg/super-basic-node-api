var request = require('supertest'),
  assert = require('assert'),
  mongoose = require('mongoose'),
  app = require('../server');

describe('User API', function () {

  var id, user;

  user = {
    username: 'someone',
    password: 'password'
  };

  beforeEach(function (done) {
    mongoose.connection.collections['users'].drop(function (err) {
      mongoose.connection.collections['users'].insert(user, function (
        err, docs) {
        id = docs[0]._id;
        done();
      });
    });
  });

  describe('POST /users', function () {
    it('should create a user', function (done) {
      request(app)
        .post('/api/users')
        .send(user)
        .end(function (err, res) {
          assert.equal(res.status, 201);
          var user = JSON.parse(res.text);
          assert.equal(user._id !== null, true);
          done();
        });
    });
  });

  describe('GET /users', function () {
    it('should return an array of users', function (done) {
      request(app)
        .get('/api/users')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          var users = JSON.parse(res.text);
          assert.equal(true, users.length > 0);
          done();
        });
    });
  });

  describe('GET /users/:user_id', function () {
    it('should return a single user', function (done) {
      request(app)
        .get('/api/users/' + id)
        .end(function (err, res) {
          assert.equal(res.status, 200);
          var user = JSON.parse(res.text);
          assert.equal(true, user !== null);
          done();
        });
    });
  });

  describe('PUT /users/:user_id', function () {
    it('should update a single user', function (done) {
      request(app)
        .put('/api/users/' + id)
        .send({
          username: 'something'
        })
        .expect(204, done);
    });
  });

  describe('DELETE /users/:user_id', function () {
    it('should delete a single user', function (done) {
      request(app)
        .delete('/api/users/' + id)
        .expect(204, done);
    });
  });
});
