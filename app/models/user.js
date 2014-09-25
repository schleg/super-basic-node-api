var Mongoose = require('mongoose');
var Bcrypt = require('bcrypt-nodejs');

var UserSchema = new Mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', function (callback) {
  var user = this;
  if (!user.isModified('password')) return callback();
  Bcrypt.genSalt(5, function (err, salt) {
    if (err) return callback(err);
    Bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

UserSchema.methods.verifyPassword = function(password, callback) {
  Bcrypt.compare(password, this.password, function(err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

module.exports = Mongoose.model('User', UserSchema);
