var passport = require('passport'),
  BasicStrategy = require('passport-http').BasicStrategy,
  User = require('../models/user');

passport.use(new BasicStrategy(
  function (username, password, callback) {
    User.findOne({
      username: username
    }, function (err, user) {
      if (err) {
        return callback(err);
      }
      if (!user) {
        return callback(null, false);
      }
      user.checkPassword(password, function (err, matched) {
        if (err) {
          return callback(err);
        }
        if (!matched) {
          return callback(null, false);
        }
        return callback(null, user);
      });
    });
  }
));

exports.isAuthenticated = passport.authenticate('basic', {
  session: false
});
