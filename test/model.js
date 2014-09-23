var request = require('supertest'),
  assert = require('assert'),
  mongoose = require('mongoose'),
  app = require('../server');

describe('Model API', function () {

  var id, model;

  model = {
    name: 'Someone'
  };

  beforeEach(function (done) {
    mongoose.connection.collections['models'].drop(function (err) {
      mongoose.connection.collections['models'].insert(model, function (
        err, docs) {
        id = docs[0]._id;
        done();
      });
    });
  });

  describe('POST /models', function () {
    it('should create a model', function (done) {
      request(app)
        .post('/api/models')
        .send({
          name: 'Else'
        })
        .end(function (err, res) {
          assert.equal(res.status, 201);
          var result = JSON.parse(res.text);
          assert.equal('Else', result.name);
          done();
        });
    });
  });

  describe('GET /models', function () {
    it('should return an array of models', function (done) {
      request(app)
        .get('/api/models')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          var result = JSON.parse(res.text);
          assert.equal(true, result.length > 0);
          done();
        });
    });
  });

  describe('GET /models/:model_id', function () {
    it('should return a single model', function (done) {
      request(app)
        .get('/api/models/' + id)
        .end(function (err, res) {
          assert.equal(res.status, 200);
          var result = JSON.parse(res.text);
          assert.equal(true, result !== null);
          done();
        });
    });
  });

  describe('PUT /models/:model_id', function () {
    it('should update a single model', function (done) {
      request(app)
        .put('/api/models/' + id)
        .send({
          name: 'Else'
        })
        .expect(204, done);
    });
  });

  describe('DELETE /models/:model_id', function () {
    it('should delete a single model', function (done) {
      request(app)
        .delete('/api/models/' + id)
        .expect(204, done);
    });
  });
});
