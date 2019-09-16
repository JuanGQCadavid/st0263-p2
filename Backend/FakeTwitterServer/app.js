var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors');
var passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tweetRouter = require('./routes/tweetRouter');
var config = require('./config');

const mongoose = require('mongoose');


// MongoDB URL for non docker tests
// const url = 'mongodb://localhost:27017/fakeTwitterDB'
// MongoDB URL from the docker-compose file
const url_M = config.mongoURL_M;
const url_S = config.mongoURL_S;

try {
  const connect = mongoose.connect(url_M);
  connect.then((db) => {
    console.log('Connected correctly to server');
  }, (err) => { console.log(err); });
}
catch (error){
  const connect = mongoose.connect(url_S);
  connect.then((db) => {
    console.log('Connected correctly to server');
  }, (err) => { console.log(err); });
}



var app = express();

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/tweets', tweetRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
