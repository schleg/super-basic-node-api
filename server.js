var express = require('express'),
  bodyParser = require('body-parser'),
  db = require('./db'),
  passport = require('passport'),
  app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/api', require('./app/routers'));
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'));
console.log("Starting (%s) server on port %s", process.env.NODE_ENV ||
  'production', app.get('port'));

module.exports = app;
