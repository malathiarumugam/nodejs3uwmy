'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.demoGet = function demoGet (req, res, next) {
  Default.demoGet(req.swagger.params, res, next);
};

module.exports.demoPost = function demoPost (req, res, next) {
  Default.demoPost(req.swagger.params, res, next);
};

module.exports.demoDemoIdGet = function demoDemoIdGet (req, res, next) {
  Default.demoDemoIdGet(req.swagger.params, res, next);
};

module.exports.demoDemoIdPut = function demoDemoIdPut (req, res, next) {
  Default.demoDemoIdPut(req.swagger.params, res, next);
};

module.exports.demoDemoIdDelete = function demoDemoIdDelete (req, res, next) {
  Default.demoDemoIdDelete(req.swagger.params, res, next);
};
