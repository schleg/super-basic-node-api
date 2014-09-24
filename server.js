var express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./db'),
    passport = require('passport'),
    expressSession = require('express-session'),
    app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(expressSession({
  resave: true,
  saveUninitialized: true,
  secret: '7B489971-BB2C-4C74-B108-BA3F47645EDF'
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./app/routers'));
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'));
console.log("Starting (%s) server on port %s", process.env.NODE_ENV || 'production', app.get('port'));

module.exports = app;
