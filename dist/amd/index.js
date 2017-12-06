define(['exports', './tiny-mce', './utilities/guid'], function (exports, _tinyMce, _guid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources('./tiny-mce');
  }
});