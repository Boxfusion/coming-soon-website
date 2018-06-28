const express = require('express');
const config = require('config');
var bodyParser = require('body-parser');
var session = require('express-session');
const site = require('../routes/site');
const error = require('../middleware/error');

module.exports = function (app) {
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({ secret: config.get('passportSessionSecret'), saveUninitialized: true, resave: true }));
    app.use('/', site);
    app.use(error);
}