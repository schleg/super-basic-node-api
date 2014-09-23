var mongoose = require('mongoose');

var connectionString = 'mongodb://localhost/super-basic-node-api';
if (process.env.NODE_ENV === 'test') {
  connectionString = 'mongodb://localhost/super-basic-node-api-test';
}

options = {
  server: {
    auto_reconnect: true,
    poolSize: 10
  }
};

mongoose.connect(connectionString, options, function (err, res) {
  var connectionMessage = 'MongoDB connection success';
  if (err) {
    connectionMessage = 'MongoDB connection failure';
  }
  console.log(connectionMessage + ' (' + connectionString + ')');
});
