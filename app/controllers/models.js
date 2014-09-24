var _ = require('lodash'),
  Model = require('../models/model');

var whitelist = {
  model: ['name']
};

exports.findModels = function (req, res) {
  Model.find(function (err, models) {
    if (err) return res.status(400).send(err);
    res.json(models);
  })
};

exports.findModel = function (req, res) {
  Model.findById(req.params.model_id, function (err, model) {
    if (err) return res.status(400).send(err);
    res.json(model);
  });
};

exports.createModel = function (req, res) {
  var model = new Model();
  _.assign(model, _.pick(req.body, whitelist.model));
  model.save(function (err) {
    if (err) return res.status(400).send(err);
    res.status(201).json(model);
  });
};

exports.updateModel = function (req, res) {
  Model.findById(req.params.model_id, function (err, model) {
    if (err) res.status(400).send(err);
    _.assign(model, _.pick(req.body, whitelist.model))
    model.save(function (err) {
      if (err) return res.status(400).send(err);
      res.status(204).json();
    });
  });
};

exports.deleteModel = function (req, res) {
  Model.remove({
    _id: req.params.model_id
  }, function (err, model) {
    if (err) return res.status(400).send(err);
    res.status(204).json()
  });
};
