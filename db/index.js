var mongoose = require('mongoose'),
  config = require('../config'),
  connectionString = 'mongodb://localhost/models',
  options = {};

options = {
  server: {
    auto_reconnect: true,
    poolSize: 10
  }
};

mongoose.connect(connectionString, options, function (err, res) {
  if (err) {
    console.log('MongoDB connection failure: ' + connectionString + '. ' +
      err);
  } else
    console.log('MongoDB connection success: ' + connectionString);
});
