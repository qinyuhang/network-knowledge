var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.get('/message', function(req, res){
    var message = Object.create(null);
    res.send(message);
})
app.post('/message', function(req, res){
    console.log(req.body);
    console.log(req.headers.authorization);
    res.send('succed!');
})
app.get("/server", function(req, res, body){
    res.send("Express version 4, welcome to network-knowledge api learning!");
})
app.get("/status", function(req, res){
    res.send(JSON.stringify(req.query));
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    var ret = Object.create(null);
    ret.errno = err.status;
    ret.message = err.message;
    ret.err = err;
    res.send(ret);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  var ret = Object.create(null);
  ret.errno = err.status;
  ret.message = err.message;
  ret.err = err;
  res.send(ret);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
});


module.exports = app;
