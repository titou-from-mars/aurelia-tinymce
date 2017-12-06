'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;

var _tinyMce = require('./tiny-mce');

var _guid = require('./utilities/guid');

function configure(config) {
  config.globalResources('./tiny-mce');
}