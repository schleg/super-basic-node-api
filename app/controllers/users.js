var _ = require('lodash'),
  User = require('../models/user');

var whitelist = {
  model: ['username']
}

exports.createUser = function (req, res) {

  var user = new User({
    username: req.body.username,
    password: req.body.password
  });

  user.save(function (err) {
    if (err) res.status(400).json(err);
    res.status(201).json(user);
  });
};

exports.findUsers = function (req, res) {
  User.find(function (err, users) {
    if (err) res.status(400).json(err);
    res.json(users);
  });
};

exports.findUser = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err) res.status(400).send(err);
    res.status(200).json(user);
  });
};

exports.updateUser = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err) res.status(400).send(err);
    _.assign(user, _.pick(req.body, whitelist.username))
    user.save(function (err) {
      if (err) res.status(400).send(err);
      res.status(204).json();
    });
  });
};

exports.deleteUser = function (req, res) {
  User.remove({
    _id: req.params.model_id
  }, function (err, model) {
    if (err) res.status(400).send(err);
    res.status(204).json()
  });
};
