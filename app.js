var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.route('/**')
  .all(function (req, res, next) {
    res.send({method: req.method, headers: req.headers, body: req.body});
  });

module.exports = app;
